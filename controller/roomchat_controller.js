const roomchatModel = require('../model/roomchat');
const roomchatUserRelationModel = require('../model/roomchat-user-relation');
const userModel = require('../model/user');
const utils = require('../utils');

module.exports.getOneroomchat = async (req, res, next) => {
    let roomchatID = req.query.roomchatid;
    try {
        let getRoomchatResult = await roomchatModel.getRoomChat({
            _id: roomchatID
        });
        let getRoomchatUserResults = await roomchatUserRelationModel.getRoomChatUsers({
            roomChatID: getRoomchatResult._id
        });
        let typeRoomchat = '';
        if (getRoomchatUserResults.length > 2) {
            typeRoomchat = 'group'
        } else {
            typeRoomchat = 'private'
        }
        let finalResult = {};
        if (getRoomchatUserResults.length !== 0) {
            let allIDs = getRoomchatUserResults.map(el => el.userID);
            let getFirstFriendID = getFriendID(req.user._id, allIDs);
            userInRoomchatInfo = await userModel.getUser({ //get first user.
                _id: getFirstFriendID
            });
            userInRoomchatInfo.profileImage.lowQuality = utils.readProfilePhotoFromDisk(userInRoomchatInfo._id, 'low');
            finalResult = {
                roomchat: getRoomchatResult,
                typeRoomchat: typeRoomchat,
                firstUserInRoomchat: userInRoomchatInfo,
                numberOfUserInRoomchat: allIDs.length - 1
            }
        }
        return res.json({
            success: true,
            myID: req.user._id + '',
            roomchat: finalResult
        })
    } catch (err) {
        return res.json({
            success: false,
            myID: '',
            roomchat: {}
        });
    }
}

module.exports.getRoomchats = async (req, res, next) => {
    try {
        let createdFromUserID = req.user._id + '';
        let getUserCreatedResult = await userModel.getUser({
            _id: createdFromUserID
        });

        let getRoomChatUsers = await roomchatUserRelationModel.getRoomChatUsers({
            userID: req.user._id + ''
        })
        let roomchatIDs = getRoomChatUsers.map(el => el.roomChatID);
        let getRoomchatResults = await roomchatModel.getRoomChats({
            _id: {
                $in: roomchatIDs
            }
        });
        getRoomchatResults = getRoomchatResults.sort((a, b) => {
            return b.time - a.time

        });

        // let userIDs = getRoomchatResults.map(el => el.lastMessage.userID);
        // let users = await userModel.getUsers({
        //     _id: {
        //         $in: userIDs
        //     }
        // });
        // let sortedUsers = utils.sortArray(userIDs, users);
        let returnArr = [];
        for (let el of getRoomchatResults) {
            let getRoomchatUserResults = await roomchatUserRelationModel.getRoomChatUsers({
                roomChatID: el._id
            });
            let typeRoomchat = '';
            if (getRoomchatUserResults.length > 2) {
                typeRoomchat = 'group'
            } else {
                typeRoomchat = 'private'
            }
            let userInRoomchat = {};
            if (getRoomchatUserResults.length !== 0) {
                let allIDs = getRoomchatUserResults.map(el => el.userID);
                let getFirstFriendID = getFriendID(req.user._id, allIDs);
                userInRoomchatInfo = await userModel.getUser({ //get first user.
                    _id: getFirstFriendID
                });
                userInRoomchatInfo.profileImage.lowQuality = utils.readProfilePhotoFromDisk(userInRoomchatInfo._id, 'low');
                returnArr.push({
                    roomchat: el,
                    typeRoomchat: typeRoomchat,
                    firstUserInRoomchat: userInRoomchatInfo,
                    numberOfUserInRoomchat: allIDs.length - 1
                });
            }

        }
        return res.json({
            success: true,
            myID: req.user._id + '',
            roomchats: returnArr
        })
    } catch (error) {
        console.log('error_')
        throw error
        return res.json({
            success: false,
            roomchats: error
        })
    }



}


module.exports.inspectDuplicateRoomchat = async (req, res, next) => {
    let userIDs = req.body.userIDs;
    if(userIDs && !userIDs.includes(req.user._id + '')){
        userIDs.push(req.user._id + '')
    }
    console.log('dupp: ',userIDs)
    let getRoomchatUserResults = await roomchatUserRelationModel.getRoomChatUsers({
        userID: req.user._id
    });

    getRoomchatResultIDs = getRoomchatUserResults.map(el => el.roomChatID);
    console.log('getRoomchatResultIDs__',getRoomchatResultIDs)
    let isDuplicate = false;
    let roomchatIDDuplicate = '';
    for (let id of getRoomchatResultIDs) {
        let getRoomchatUserResults = await roomchatUserRelationModel.getRoomChatUsers({
            roomChatID: id,
        });
        let usersInRoomchat = getRoomchatUserResults.map(el => el.userID);
        userIDs.push(req.user._id + '');
        console.log('log: ', usersInRoomchat)
        let resultCheck = utils.checkEqualArr(usersInRoomchat, userIDs)
        console.log('resu: ', resultCheck, id)
        if (resultCheck) {
            isDuplicate = true;
            roomchatIDDuplicate = id;
            break;
        }
    }
    if (isDuplicate) {
        return res.json({
            success: true,
            duplicate: true,
            roomchatID: roomchatIDDuplicate
        })
    } else {
        return res.json({
            success: true,
            duplicate: false
        })
    }
}

module.exports.createRoomchat = async (req, res, next) => {
    try {
        let newRoomchat = new roomchatModel({
            isSeenBy: [],
            createdFromUserID: req.user._id + '',
            name: req.body.name,
            lastMessage: {
                userID: req.user._id + '',
                content: 'Xin chào!'
            },
            time: Date.now()
        });
        let createResult1 = await roomchatModel.createRoomChat(newRoomchat).catch(err => console.log(err));
        let createResult2 = await roomchatUserRelationModel.createRoomChatUser(new roomchatUserRelationModel({
            roomChatID: createResult1._id,
            userID: createResult1.createdFromUserID,
            isAdmin: true,
            time: Date.now()
        }));
        return res.json({
            success: true,
            roomchat: createResult1,
            msg: 'success'
        })
    } catch (error) {
        return res.json({
            success: false,
            roomchat: {},
            msg: 'fail'
        })
    }

}


module.exports.deleteRoomchat = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let deleteResult = await roomchatModel.deleteRoomChat({
            _id: roomchatID
        })
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

module.exports.updateRoomchat = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let updatedRoomchat = req.body;
        let updateResult = await roomchatModel.updateRoomChat({
            _id: roomchatID
        }, updatedRoomchat)
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

var getFriendID = (myID, allIDs) => {
    if (allIDs.length === 1) {
        return myID
    } else {
        let friendIDs = allIDs.filter(el => el + '' !== myID + '');
        return friendIDs[0] + '';
    }

}
