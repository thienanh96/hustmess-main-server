const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const roomchatController = require('../controller/roomchat_controller');
const authorizationRoomchat = require('../authorization/roomchat');

router.get('/one',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchat.authorizeOneGET,
    roomchatController.getOneroomchat
)
router.get('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    roomchatController.getRoomchats
)

router.post('/',
    passport.authenticate("jwt", {
        session: false
    }),
    roomchatController.createRoomchat
)
router.put('/',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchat.authorizePUT,
    roomchatController.updateRoomchat
)
router.delete('/',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationRoomchat.authorizeDELETE,
    roomchatController.deleteRoomchat
)
router.post('/checkduplicate',
    passport.authenticate("jwt", {
        session: false
    }),
    roomchatController.inspectDuplicateRoomchat
)


module.exports = router;