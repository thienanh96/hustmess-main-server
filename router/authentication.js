const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const authenticationController = require('../controller/authentication_controller');



router.post('/login',
    authenticationController.login
)

router.post('/register',
    authenticationController.register
)

router.post('/validate',
    authenticationController.validate
)

module.exports = router;

