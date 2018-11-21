const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const messageController = require('../controller/message_controller');
const authorizationMessage = require('../authorization/message');

router.get('/one',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationMessage.authorizeOneGET,
    messageController.getOneMessage
)
router.get('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationMessage.authorizeManyGET,
    messageController.getMessages
)

router.post('',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationMessage.authorizePOST,
    messageController.createMessage
)
router.put('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    messageController.updateMessages
)
router.delete('',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationMessage.authorizeDELETE,
    messageController.deleteMessage
)
module.exports = router;