const downloadsController = require('../controller/downloads_controller');
const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");

router.get('/:filename',
    downloadsController.download
)

module.exports = router;