const roomchatModel = require('../model/roomchat');
const roomchatUserRelation = require('../model/roomchat-user-relation');

module.exports.authorizeOneGET = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomchatID
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
        throw error
        return res.json({
            success: false,
            msg: error
        })
    }


}

module.exports.authorizeManyGET = (req, res, next) => {
    let createdFromUserID = req.query.userid;
    if (createdFromUserID + '' !== req.user._id + '') {
        return res.json({
            success: false,
            msg: 'Unauthorizeeeed'
        })
    } else {
        return next();
    }
}

module.exports.authorizePOST = async (req, res, next) => {
    let createdFromUserID = req.body.createdFromUserID;
    if (createdFromUserID + '' !== req.user._id + '') {
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    } else {
        return next();
    }
}


module.exports.authorizePUT = async (req, res, next) => {
    try {
        let roomchatID = req.query.roomchatid;
        let getResults = await roomchatUserRelation.getRoomChatUsers({
            roomChatID: roomchatID
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
        let roomchatID = req.query.roomchatid;
        let getResult = await roomchatModel.getRoomChat({
            _id: roomchatID
        });
        if (getResult.createdFromUserID + '' !== req.user._id + '') {
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