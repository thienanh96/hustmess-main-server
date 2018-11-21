const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const roomchatUserController = require('../controller/roomchat-user-relation_controller');
const authorizationRoomchatUser = require('../authorization/roomchat-user-relation');


router.post('/', //them nguoi dung vao room chat hoac tham gia room chat
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchatUser.authorizePOST,
    roomchatUserController.addUserToRoomchat
)




router.delete('/', //kick nguoi dung khoi room chat hoac roi nhom chat
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchatUser.authorizeDELETE,
    roomchatUserController.deleteUserFromRoomchat
)

router.put('',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchatUser.authorizeUPDATE,
    roomchatUserController.updateRoomchatUser
)

router.get('/many', 
    passport.authenticate("jwt", {
        session: false
    }),
    roomchatUserController.getRoomchatUser
)


module.exports = router;