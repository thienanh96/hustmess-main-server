const fileController = require('../controller/file_controller');
const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");




router.get('',
    passport.authenticate("jwt", {
        session: false
    }),
    fileController.getFiles
)

module.exports = router;