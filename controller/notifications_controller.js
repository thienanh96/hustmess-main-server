const NotificationModel = require('../model/notifications');
const userModel = require('../model/user');
const roomchatModel = require('../model/roomchat');
const fileModel = require('../model/files');
const utils = require('../utils');
const fs = require('fs');
const path = require('path');

module.exports.createNotification = async (req, res, next) => {
    let newNotification = new NotificationModel({
        fromUserID: req.user._id + '',
        toUserID: req.body.toUserID,
        detail: req.body.detail,
        seen: false,
        time: req.body.time
    });
    return NotificationModel.createNotification(newNotification).then(result => {
        return res.json({
            success: true,
            newNotification: result,
            msg: 'success'
        })
    }).catch(err => {
        return res.json({
            success: false,
            newNotification: {},
            msg: 'fail'
        })
    })
}

module.exports.updateNotifications = async (req, res, next) => {
    try {
        let toUserID = req.user._id;
        let topTime = parseInt(req.body.topTime);
        let bottomTime = parseInt(req.body.bottomTime);
        console.log('timeupdate: ',topTime,bottomTime)
        let updateResults = await NotificationModel.updateManyNotifications({
            toUserID: toUserID,
            time: {
                $lt: topTime,
                $gt: bottomTime
            }
        }, {
            seen: true
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

// module.exports.deleteNotification = (req, res, next) => {
//     let NotificationID = req.query.Notificationid;
//     return NotificationModel.deleteNotification({
//         _id: NotificationID
//     }).then(result => {
//         return res.json({
//             success: true,
//             msg: 'success'
//         })
//     }).catch(err => {
//         return res.json({
//             success: false,
//             msg: 'fail'
//         })
//     })
// }

// module.exports.getOneNotification = async (req, res, next) => {
//     try {
//         let NotificationID = req.query.Notificationid;
//         let Notification = await NotificationModel.getOneNotification({
//             _id: NotificationID
//         });
//         let fileID = Notification.file;
//         let finalNotification = {
//             _id: Notification._id,
//             exclude: Notification.exclude,
//             fromUserID: Notification.fromUserID,
//             roomChatID: Notification.roomChatID,
//             content: Notification.content,
//             attach: '',
//             fileName: '',
//             fileType: '',
//             time: Notification.time
//         };
//         if (fileID !== '') {
//             let getFileResult = await fileModel.getFile({
//                 _id: fileID
//             });
//             finalNotification.fileName = getFileResult.originalName;
//             finalNotification.fileType = getFileResult.fileType;
//             if (getFileResult.fileType === 'image') {
//                 finalNotification.attach = "data:image/" + path.extname(getFileResult.downloadLink).replace('.', '') + ";base64," + fs.readFileSync('./uploads/fileupload/' + Notification.roomChatID + '/' + getFileResult.downloadLink).toString('base64');
//             }
//         }


//         let fromUserID = Notification.fromUserID;
//         let userProfile = await userModel.getUser({
//             _id: fromUserID
//         });
//         userProfile.profileImage.lowQuality = utils.readProfilePhotoFromDisk(fromUserID, 'low');
//         return res.json({
//             success: true,
//             Notification: finalNotification,
//             userProfile: userProfile
//         })
//     } catch (error) {
//         throw error
//         return res.json({
//             success: false,
//             msg: error,
//         })
//     }


// }

module.exports.getNotifications = async (req, res, next) => {
    try {
        let toUserID = req.user._id;
        let limit = parseInt(req.query.limit);
        let timeSeq = parseInt(req.query.time);
        let notifications = await NotificationModel.getNotifications({
            toUserID: toUserID,
            time: {
                $lt: timeSeq
            }
        }, limit);
        let returnedNotifications = [];
        for(let notification of notifications){
            let fromUserID = notification.fromUserID;
            let userProfile = await userModel.getUser({
                _id: fromUserID
            });
            userProfile.profileImage.lowQuality = utils.readProfilePhotoFromDisk(fromUserID, 'low');
            returnedNotifications.push({
                notification: notification,
                fromUserInfo: userProfile
            })
        }
        return res.json({
            success: true,
            notifications: returnedNotifications
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error
        })
    }

}

module.exports.getNumberOfUnreadNotifications = async (req, res, next) => {
    try {
        let toUserID = req.user._id;
        let notifications = await NotificationModel.getNotifications({
            toUserID: toUserID,
            time: {
                $lt: Date.now() + 1000
            }
        }, 0);
        let numberOfUnreadNotifications = notifications.filter(el => !el.seen).length;
        return res.json({
            success: true,
            numberOfUnreadNotifications: numberOfUnreadNotifications
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error
        })
    }

}