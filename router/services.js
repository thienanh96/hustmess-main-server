const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const userModel = require('../model/user');



router.get('/call',
    (req, res, next) => {
        let userID = req.query.userid;
        return userModel.getUser({
            _id: userID
        }).then(user => {
            if(!user) return;
            let peerID = user.detail.peerID;
            return res.render('call.ejs', {
                id: peerID
            })
        })

    }
)

module.exports = router;