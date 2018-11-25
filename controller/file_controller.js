const directoryExists = require('directory-exists');
const path = require("path");
const utils = require('../utils');
const fs = require('fs');
const fileModel = require('../model/files');

module.exports.getFiles = async (req, res, next) => {
    let roomchatID = req.query.roomchatid;
    let typeFile = req.query.type;
    let timeSeq = req.query.time;
    let limit = req.query.limit;
    let dirname = './uploads/fileupload/' + roomchatID;
    let files = [];
    try {
        if(typeFile === 'image'){
            let getImagesResult = await fileModel.getImages({
                roomchatID: roomchatID,
                fileType: 'image',
                time: {
                    $lt: parseInt(timeSeq)
                }
            }, parseInt(limit));
            for(let image of getImagesResult){
                let ext = path.extname(image.originalName);
                console.log('ext: ',ext)
                if(ext === '.gif') continue;
                let squarePhoto = await utils.makeSquareImage(dirname + '/' + image.downloadLink);
                files.push({
                    fileType: 'image',
                    fileID: image._id,
                    imageSrc: squarePhoto,
                    time: image.time
                })
            }
        } else if (typeFile === 'application'){
            let getFilesResult = await fileModel.getFiles({
                roomchatID: roomchatID,
                fileType: 'application'
            });
            files = getFilesResult.map(el => {
                return {
                    fileType: 'application',
                    fileID: el._id,
                    downloadLink: el.downloadLink,
                    fileName: el.originalName
                }
            })
        }
        return res.json({
            success: true,
            files: files
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            files: []
        })
    }
}

module.exports.getOneFile = async (req, res, next) => {
    let roomchatID = req.query.roomchatid;
    let typeFile = req.query.type;
    let fileID = req.query.id;
    let dirname = './uploads/fileupload/' + roomchatID;
    try {
        let file = await fileModel.getFile({
            _id: fileID
        });
        if(typeFile === 'image'){
            let ext = path.extname(file.originalName);
            let originalPhoto = utils.readImageFileFromDisk(file.downloadLink,ext,roomchatID);
            let photoInfo = await utils.getPhotoInfo(dirname + '/' + file.downloadLink);
            return res.json({
                success: true,
                imageSrc: originalPhoto,
                photoInfo: photoInfo
            })
        } else if (typeFile === 'application'){
            return res.json({
                success: true,
                downloadLink: file.downloadLink
            })
        }
    } catch (error) {
        throw error
        return res.json({
            success: false,
            files: []
        })
    }
}