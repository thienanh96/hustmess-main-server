const express = require("express");
const router = express.Router();
const path = require("path");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const userController = require('../controller/user_controlller');
const authorizationUser = require('../authorization/user');

router.get('/one',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.getOneUser
)
router.get('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.getMyFriends
)
router.get('/me',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.getMe
)

router.get('/all',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.getAllUsers
)

router.get('/search/friends',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.searchFriends
)

router.post('/many',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.getUsers
)



router.put('',
    passport.authenticate("jwt", {
        session: false
    }),
    userController.updateUser
)
router.delete('',
    passport.authenticate("jwt", {
        session: false
    }),
    authorizationUser.authorizeDELETE,
    userController.deleteUser
)


module.exports = router;
