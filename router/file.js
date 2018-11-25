const fileController = require('../controller/file_controller');
const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");




router.get('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    fileController.getFiles
)

router.get('/',
    passport.authenticate("jwt", {
        session: false
    }),
    fileController.getOneFile
)

module.exports = router;