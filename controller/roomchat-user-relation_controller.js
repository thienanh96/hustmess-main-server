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
        let me = getUsersInRoomchatResult.filter(el => el.userID + '' === req.user._id + '');
        if (me && me.length > 0) {
            if (me[0].isAdmin) {
                let userIDsInRoomchat = getUsersInRoomchatResult.map(el => el.userID);
                for (let userID of userIDs) {
                    if (userIDsInRoomchat.includes(userID)) continue;
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
            } else {
                return res.json({
                    success: false,
                })
            }
        } else {
            return res.json({
                success: false
            })
        }
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
            let getRoomchatUserResults = await roomchatUserRelation.getRoomChatUsers({
                roomChatID: roomchatID
            })
            let userIDsInRoomchat = getRoomchatUserResults.map(el => el.userID);
            if (userIDsInRoomchat.includes(req.user._id + '') && userIDsInRoomchat.includes(userID + '')) {
                let me = getRoomchatUserResults.filter(el => el.userID === req.user._id + '');
                let dest = getRoomchatUserResults.filter(el => el.userID === userID + '');
                console.log('me and dest: ',me,dest)
                if (me && dest && me.length > 0 && dest.length > 0) {
                    if ((!me[0].isAdmin)) {
                        return res.json({
                            success: false
                        })
                    }
                    query = {
                        isAdmin: true
                    }

                }
            }
        } else if (typeUpdate === 'delete-assign-admin') {
            let roomchat = await roomchatModel.getRoomChat({
                _id: roomchatID
            });
            if (roomchat) {
                let rootUserID = roomchat.createdFromUserID;
                if ((rootUserID + '' !== req.user._id + '') || (req.user._id + '' === userID)) {
                    return res.json({
                        success: false
                    })
                } else {
                    query = {
                        isAdmin: false 
                    }
                }
            } else {
                return res.json({
                    success: false
                })
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
        let getRoomchatUserResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomChatID
        })
        let userIDsInRoomchat = getRoomchatUserResults.map(el => el.userID);
        if ((userIDsInRoomchat.includes(req.user._id + '') && userIDsInRoomchat.includes(userID + ''))) {
            let me = getRoomchatUserResults.filter(el => el.userID === req.user._id + '');
            let dest = getRoomchatUserResults.filter(el => el.userID === userID + '');
            if (me && dest && me.length > 0 && dest.length > 0) {
                if ((!me[0].isAdmin) || dest[0].isAdmin) {
                    return res.json({
                        success: false,
                        msg: 'not permitted'
                    })
                }
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
            } else {
                console.log('b')
                return res.json({
                    success: false,
                    msg: 'not permitted'
                })
            }
        } else {
            return res.json({
                success: false,
                msg: 'not permitted'
            })
        }
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error
        })
    }
}