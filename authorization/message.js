const messageModel = require('../model/message');
const roomchatUserRelation = require('../model/roomchat-user-relation');

module.exports.authorizeOneGET = async (req, res, next) => {
    try {
        let messageID = req.query.messageid;
        let getResult = await messageModel.getOneMessage({
            _id: messageID
        });
        if (getResult.fromUserID + '' !== req.user._id + '') {
            return res.json({
                success: false,
                msg: 'Unauthorized'
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

module.exports.authorizeManyGET = async (req, res, next) => {
    try {
        let roomChatID = req.query.roomchatid;
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomChatID
        });
        let userIDs = getResults.map(el => el.userID + ''); //get ra tat ca users trong roomchat nay
        if (userIDs.includes(req.user._id + '')) { // kiem tra user hien tai co trong roomchat hay khong
            return next();
        } else {
            return res.json({
                success: false,
                msg: 'Unauthorized'
            })
        }

    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }



}

module.exports.authorizePOST = async (req, res, next) => {
    try {
        let roomChatID = req.body.roomChatID;
        console.log('roomcht-id____',roomChatID)
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomChatID
        });
        let userIDs = getResults.map(el => el.userID + ''); //get ra tat ca users trong roomchat nay
        if (userIDs.includes(req.user._id + '')) { // kiem tra user hien tai co trong roomchat hay khong
            return next();
        } else {
            return res.json({
                success: false,
                msg: 'Unauthorized'
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }


}

module.exports.authorizeDELETE = async (req, res, next) => {
    try {
        let messageID = req.query.messageid;
        let getResult = await messageModel.getOneMessage({
            _id: messageID
        });
        if (getResult.fromUserID + '' === req.user._id + '') {
            return next();
        } else {
            return res.json({
                success: false,
                msg: 'Unauthorized'
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }


}

module.exports.authorizeManyPUT = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomchatID
        });
        let userIDs = getResults.map(el => el.userID + ''); //get ra tat ca users trong roomchat nay
        console.log('userids: ',userIDs)
        if (userIDs.includes(req.user._id + '')) { // kiem tra user hien tai co trong roomchat hay khong
            return next();
        } else {
            return res.json({
                success: false,
                msg: 'Unauthorizedd'
            })
        }

    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }

}