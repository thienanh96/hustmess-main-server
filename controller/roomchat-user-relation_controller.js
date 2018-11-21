const roomchatUserRelation = require('../model/roomchat-user-relation');
const roomchatModel = require('../model/roomchat');
const utils = require('../utils');

module.exports.addUserToRoomchat = async (req, res, next) => {
    try {
        let userIDs = req.body.userIDs;
        let newRoomchatUsers = [];
        let getUsersInRoomchatResult = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: req.body.roomChatID
        });
        let userIDsInRoomchat = getUsersInRoomchatResult.map(el => el.userID);
        for (let userID of userIDs) {
            if(userIDsInRoomchat.includes(userID)) continue;
            newRoomchatUsers.push({
                roomChatID: req.body.roomChatID,
                isAdmin: false,
                userID: userID,
                time: Date.now()
            })
        }
        let insertResult = await roomchatUserRelation.insertManyRoomchatUsers(newRoomchatUsers);
        return res.json({
            success: true,
            msg: 'success'
        })
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }
}


module.exports.getRoomchatUser = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid + '';
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomchatID
        });
        return res.json({
            success: true,
            roomchatUsers: getResults
        })
    } catch (error) {
        return res.json({
            success: false,
            roomchatUsers: []
        })
    }
}

module.exports.updateRoomchatUser = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid + '';
        let userID = req.query.userid;
        let typeUpdate = req.query.type;
        let query = '';
        if (typeUpdate === 'assign-admin') {
            query = {
                isAdmin: true
            }
        } else if (typeUpdate === 'delete-assign-admin') {
            query = {
                isAdmin: false
            }
        } else {
            return res.json({
                success: false
            })
        }
        let updateResult = await roomchatUserRelation.updateRoomChatUser({
            $and: [{
                    roomChatID: roomchatID
                },
                {
                    userID: userID
                }
            ]
        }, query);
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

module.exports.deleteUserFromRoomchat = async (req, res, next) => {
    try {
        let roomChatID = req.query.roomchatid;
        let userID = req.query.userid;
        let deleteResult = await roomchatUserRelation.deleteRoomChatUser({
            $and: [{
                    roomChatID: roomChatID
                },
                {
                    userID: userID
                }
            ]
        });
        return res.json({
            success: true,
            msg: 'success'
        })
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }
}