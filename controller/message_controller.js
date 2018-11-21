const messageModel = require('../model/message');
const userModel = require('../model/user');
const roomchatModel = require('../model/roomchat');
const fileModel = require('../model/files');
const utils = require('../utils');
const fs = require('fs');
const path = require('path');

module.exports.createMessage = async (req, res, next) => {
    let finalFileName = req.body.attach;
    let originalFileName = req.body.fileName;
    let fileType = req.body.fileType;
    let fileID;
    let newFile;
    if (finalFileName && finalFileName !== '') {
        newFile = new fileModel({
            originalName: originalFileName,
            downloadLink: finalFileName,
            fileType: fileType,
            roomchatID: req.body.roomChatID,
            time: Date.now()
        })
        let createFileResult = await fileModel.createFile(newFile);
        fileID = createFileResult._id;
    } else {
        fileID = '';
        newFile = null;
    }

    let newMessage = new messageModel({
        fromUserID: req.user._id + '',
        roomChatID: req.body.roomChatID,
        content: req.body.content,
        file: fileID,
        time: Date.now()
    });
    roomchatModel.updateRoomChat({
        _id: req.body.roomChatID
    }, {
        lastMessage: {
            userID: req.user._id + '',
            content: req.body.content
        },
        time: Date.now()
    }).then(result => console.log(result));
    let userProfile = await userModel.getUser({
        _id: req.user._id + ''
    });
    userProfile.profileImage.lowQuality = utils.readProfilePhotoFromDisk(req.user._id + '', 'low');
    return messageModel.createMessage(newMessage).then(result => {
        return res.json({
            success: true,
            newMessage: result,
            file: newFile,
            userInfo: userProfile,
            msg: 'success'
        })
    }).catch(err => {
        return res.json({
            success: false,
            newMessage: {},
            userInfo: {},
            msg: 'fail'
        })
    })
}

module.exports.updateMessages = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let updateResults = await messageModel.updateManyMessages({
            roomChatID: roomchatID,
            time: {
                $lt: Date.now()
            }
        }, {
            $push: {
                exclude: req.user._id + ''
            }
        })
        return res.json({
            success: true
        })
    } catch (error) {
        throw error;
        return res.json({
            success: false
        })
    }
}

module.exports.deleteMessage = (req, res, next) => {
    let messageID = req.query.messageid;
    return messageModel.deleteMessage({
        _id: messageID
    }).then(result => {
        return res.json({
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        return res.json({
            success: false,
            msg: 'fail'
        })
    })
}

module.exports.getOneMessage = async (req, res, next) => {
    try {
        let messageID = req.query.messageid;
        let message = await messageModel.getOneMessage({
            _id: messageID
        });
        let fileID = message.file;
        let finalMessage = {
            _id: message._id,
            exclude: message.exclude,
            fromUserID: message.fromUserID,
            roomChatID: message.roomChatID,
            content: message.content,
            attach: '',
            fileName: '',
            fileType: '',
            time: message.time
        };
        if (fileID !== '') {
            let getFileResult = await fileModel.getFile({
                _id: fileID
            });
            finalMessage.fileName = getFileResult.originalName;
            finalMessage.fileType = getFileResult.fileType;
            if (getFileResult.fileType === 'image') {
                finalMessage.attach = "data:image/" + path.extname(getFileResult.downloadLink).replace('.', '') + ";base64," + fs.readFileSync('./uploads/fileupload/' + message.roomChatID + '/' + getFileResult.downloadLink).toString('base64');
            }
        }


        let fromUserID = message.fromUserID;
        let userProfile = await userModel.getUser({
            _id: fromUserID
        });
        userProfile.profileImage.lowQuality = utils.readProfilePhotoFromDisk(fromUserID, 'low');
        return res.json({
            success: true,
            message: finalMessage,
            userProfile: userProfile
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error,
        })
    }


}

module.exports.getMessages = async (req, res, next) => {
    try {
        let roomChatID = req.query.roomchatid;
        let limit = parseInt(req.query.limit);
        let timeSeq = parseInt(req.query.time);
        let messages = await messageModel.getMessages({
            roomChatID: roomChatID,
            time: {
                $lt: timeSeq
            }
        },limit);
        let returnMessages = [];
        for (let message of messages) {
            if (message.exclude.includes(req.user._id + '')) continue;
            let fileID = message.file;
            let finalMessage = {
                _id: message._id,
                exclude: message.exclude,
                fromUserID: message.fromUserID,
                roomChatID: message.roomChatID,
                content: message.content,
                attach: '',
                fileName: '',
                fileType: '',
                time: message.time
            };
            if (fileID !== '') {
                let getFileResult = await fileModel.getFile({
                    _id: fileID
                });
                finalMessage.fileName = getFileResult.originalName;
                finalMessage.fileType = getFileResult.fileType;
                if (getFileResult.fileType === 'image') {
                    finalMessage.attach = "data:image/" + path.extname(getFileResult.downloadLink).replace('.', '') + ";base64," + fs.readFileSync('./uploads/fileupload/' + message.roomChatID + '/' + getFileResult.downloadLink).toString('base64');
                } else {
                    finalMessage.attach = getFileResult.downloadLink
                }
            }

            let fromUserID = message.fromUserID;
            let userProfile = await userModel.getUser({
                _id: fromUserID
            });
            userProfile.profileImage.lowQuality = utils.readProfilePhotoFromDisk(fromUserID, 'low');
            returnMessages.unshift({
                message: finalMessage,
                userProfile: userProfile
            })
        }
        return res.json({
            success: true,
            messages: returnMessages,
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error
        })
    }

}