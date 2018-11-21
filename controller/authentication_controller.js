const userModel = require('../model/user');
const validation = require('../validation');
const jwt = require('jsonwebtoken');
const secret = require('../config/auth').secret;


module.exports.login = async (req, res, next) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let getResult = await userModel.getUser({
            $or: [{
                    username: username
                },
                {
                    email: username
                },
                {
                    phoneNumber: username
                }
            ]
        }).catch(err => console.log(err))
        let oldPassword;
        if(getResult){
            oldPassword = getResult.password;
        } else {
            oldPassword = '';
        }
        let isMatch = await userModel.comparePassword(password, oldPassword).catch(err => console.log(err))
        if (isMatch) {
            var newToken = jwt.sign(getResult.toJSON(), secret, {
                expiresIn: 604800 // 1 week
            });
            return res.json({
                _id: getResult._id,
                success: true,
                token: 'JWT ' + newToken,
            });
        } else {
            return res.json({
                success: false,
                msg: 'Mật khẩu hoặc tài khoản sai. Vui lòng nhập lại!'
            });
        }
    } catch (error) {
        throw error
        return res.json({
            success: false,
            msg: error
        });
    }


}


module.exports.register = async (req, res, next) => {
    try {
        let isValidUser = validation.validateUser(req.body);
        if (isValidUser) {
            let getResult = await userModel.getUser({
                email: req.body.email
            });
            if (!getResult) {
                let newUser = {
                    username: req.body.username,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber,
                    profileImage: {
                        highQuality: 'uploads/profileimage/high-quality/default.png',
                        lowQuality: 'uploads/profileimage/low-quality/default.png'
                    },
                    password: req.body.password,
                    detail: {},
                    timeActive: Date.now()
                }
                let createResult = await userModel.createUser(new userModel(newUser)).catch(err => console.log(err))
                return res.json({
                    success: true,
                    displayUI: true,
                    msg: 'User registered !'
                });

            } else {
                return res.json({
                    success: false,
                    msg: 'Email đã tồn tại'
                });
            }

        } else {
            return res.json({
                success: false,
                msg: 'Thông tin đăng ký không hợp lệ'
            })
        }
    } catch (error) {
        return res.json({
            success: false,
            msg: error
        })
    }

}

module.exports.validate = (req, res, next) => {
    return userModel.getUsers({}).then(users => {
        let userMails = users.map(user => user.email);
        let existEmail = userMails.includes(req.body.email + '');
        if (!existEmail) {
            return res.json({
                success: true
            });
        } else {
            return res.json({
                success: false
            });
        }

    })
}