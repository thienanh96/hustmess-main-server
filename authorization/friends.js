const friendsModel = require('../model/friends');

module.exports.authorizePOST = function(req, res, next){
    let firstUser = req.body.firstUser;
    let secondUser = req.body.seconedUser;
    if (firstUser + '' === req.user._id + '' || secondUser + '' === req.user._id + '') {
        return next();
    } else {
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    }
}


module.exports.authorizePUT = (req, res, next) => {
    let firstUser = req.body.firstUser;
    let secondUser = req.body.seconedUser;
    if (firstUser + '' === req.user._id + '' || secondUser + '' === req.user._id + '') {
        return next();
    } else {
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    }
}



module.exports.authorizeDELETE = (req, res, next) => {
    let firstUser = req.query.firstuser;
    let secondUser = req.query.seconduser;
    if (firstUser + '' === req.user._id + '' || secondUser + '' === req.user._id + '') {
        return next();
    } else {
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    }
}