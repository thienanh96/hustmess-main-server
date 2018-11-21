const uploadsController = require('../controller/uploads_controller')
const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");




router.post('/files',
    passport.authenticate("jwt", {
        session: false
    }),
    uploadsController.uploadFiles
)

router.get('/files',
    passport.authenticate("jwt", {
        session: false
    }),
    uploadsController.getFiles
)

module.exports = router;