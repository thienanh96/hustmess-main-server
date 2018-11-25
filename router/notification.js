const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const notificationController = require('../controller/notifications_controller');


router.post('/', //them nguoi dung vao room chat hoac tham gia room chat
    passport.authenticate("jwt", {
        session: false
    }),
    notificationController.createNotification
)




router.put('/', //kick nguoi dung khoi room chat hoac roi nhom chat
    passport.authenticate("jwt", {
        session: false
    }),
    notificationController.updateNotifications
)


router.get('/many', 
    passport.authenticate("jwt", {
        session: false
    }),
    notificationController.getNotifications
)

router.get('/many/count', 
    passport.authenticate("jwt", {
        session: false
    }),
    notificationController.getNumberOfUnreadNotifications
)


module.exports = router;