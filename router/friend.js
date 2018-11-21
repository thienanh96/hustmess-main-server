const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const friendsController = require('../controller/friends_controller');
const authorizationFriends = require('../authorization/friends');


router.post('/', //them loi moi ket ban
    passport.authenticate("jwt", {
        session: false
    }),
    friendsController.createFriend
)

router.get('/many', //them loi moi ket ban
    passport.authenticate("jwt", {
        session: false
    }),
    friendsController.getFriends
)

router.put('/', //chap nhan loi moi ket ban
    passport.authenticate("jwt", {
        session: false
    }),
    friendsController.updateFriend
)



router.delete('/', //huy ket ban
    passport.authenticate("jwt", {
        session: false
    }),
    friendsController.deleteFriend
)

module.exports = router;