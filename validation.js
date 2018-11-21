// const User = require('../model/user');
// const filetype = require('file-type');

// const ACCEPTED_FILE_TYPE = ['jpeg', 'png', 'gif', 'jpg', 'mp3', 'mp4', '3pg', 'wav'];
// const ACCEPTED_FILTER_TYPE = ['normal', 'clarendon', 'gingham', 'moon', 'reyes', 'lark', 'juno', 'slumber'];


module.exports.validateUser = function (user) {
    if (user.username === undefined || user.email === undefined || user.password === undefined || user.phoneNumber === undefined) {
        return false;
    } else {
        const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regExpPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        return regExpEmail.test(user.email) && regExpPassword.test(user.password) && module.exports.validateNumber(user.phoneNumber);
    }
}

// module.exports.validateFile = (files) => {
//     for (let i = 0; i < files.length; i++) {
//         console.log(ACCEPTED_FILE_TYPE.includes(filetype(files[i]).ext))
//         if (files[i].byteLength > 1024 * 1024 * 2) {
//             return {
//                 valid: false,
//                 msg: 'Extend limit size'
//             }
//         }

//         if (filetype(files[i]) === null || !ACCEPTED_FILE_TYPE.includes(filetype(files[i]).ext)) {
//             return {
//                 valid: false,
//                 msg: 'Unsupported file type'
//             }
//         }

//     }
//     console.log('sup')
//     return {
//         valid: true,
//         msg: 'Valid file'
//     }
// }


module.exports.validateNumber = (str) => {
    return str && !isNaN(str);
}