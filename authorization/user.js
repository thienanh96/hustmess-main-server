const userModel = require('../model/user');


module.exports.authorizePUT = (req,res,next) => {
    let userID = req.query.userid;
    if(userID !== req.user._id + ''){
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    } else {
        return next();
    }
}

module.exports.authorizeDELETE = (req,res,next) => {
    let userID = req.query.userid;
    if(userID !== req.user._id + ''){
        return res.json({
            success: false,
            msg: 'Unauthorized'
        })
    } else {
        return next();
    }
}