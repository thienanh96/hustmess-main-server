const roomchatUserRelation = require('../model/roomchat-user-relation');
const roomchatModel = require('../model/roomchat');

module.exports.authorizePOST = async (req, res, next) => { //authorize add new user to a roomchat
    try {
        let roomchatID = req.body.roomChatID;
        let myRole = await getRoleUserInGroup(roomchatID, req.user._id + '');
        if (myRole === 'normal-user' || myRole === 'none') {
            return res.json({
                success: false,
                msg: 'Unauthorizeddd'
            })
        } else {
            return next();
        }
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }


}

module.exports.authorizeUPDATE = async (req, res, next) => { //authorize add new user to a roomchat
    try {
        let roomchatID = req.query.roomchatid + '';
        let userID = req.query.userid;
        let myRole = await getRoleUserInGroup(roomchatID, req.user._id + '');
        let userRole = await getRoleUserInGroup(roomchatID, userID);
        if ((myRole === 'admin' && userRole === 'normal-user') || myRole === 'root-user') {
            return next();
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


module.exports.authorizeDELETE = async (req, res, next) => { //authorize delete new user from a roomchat
    try {
        let roomchatID = req.body.roomChatID;
        let myRole = await getRoleUserInGroup(roomchatID, req.user._id + '');
        if (myRole === 'normal-user' || myRole === 'none') {
            return res.json({
                success: false,
                msg: 'Unauthorizeddd'
            })
        } else {
            return next();
        }
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }
}

var getRoleUserInGroup = async (roomchatID, userID) => {
    let getResultRoomchatUser = await roomchatUserRelation.getRoomChatUser({
        $and: [{
                roomChatID: roomchatID
            },
            {
                userID: userID
            }
        ]
    });
    let getResultRoomchat = await roomchatModel.getRoomChat({
        _id: roomchatID
    });
    if (getResultRoomchat.createdFromUserID + '' === userID + '') {
        return 'root-user'
    }
    if (!getResultRoomchatUser) {
        return 'none'
    } else {
        if (getResultRoomchatUser.isAdmin) {
            return 'admin'
        } else {
            return 'normal-user'
        }
    }
}