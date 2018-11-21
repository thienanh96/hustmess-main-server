const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const fs = require('fs');
var textSearch = require('mongoose-text-search');


const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        require: false
    },
    password: {
        type: String,
        required: false
    },
    profileImage: {
        highQuality: String,
        lowQuality: String
    },
    timeActive: {
        type: Number,
        require: true
    },
    detail: {
        peerID: String,
        class: String,
        grade: String
    }
});


// UserSchema.plugin(textSearch);
UserSchema.index({ username: "text" });

var User = module.exports = mongoose.model('User', UserSchema, 'User');


module.exports.createUser = async function (newUser, callback) {
    let hash = await bcrypt.hash(newUser.password, 10);
    newUser.password = hash;
    return await newUser.save();
}

module.exports.searchUsers = function (termSearch) {
    return User.find({
        $text: {
            $search: termSearch
        }
    });
}

module.exports.saveUser = function (newUser) {
    return newUser.save();
}

module.exports.getUsers = function (query, fields) {
    return User.find(query, fields);
}

// module.exports.updateProfilePhoto = function (userId, base64Photo, photoName) {
//     return User.findOneAndUpdate({
//         _id: userId
//     }, {
//         profileImage: photoName
//     }).then(() => {
//         let bufferPhoto = services.toBuffer(base64Photo);
//         if (!fs.existsSync("./uploads/" + userId)) {
//             fs.mkdirSync("./uploads/" + userId);
//             fs.mkdirSync("./uploads/" + userId + "/preview");
//             fs.mkdirSync("./uploads/" + userId + "/main");
//         }
//         fs.writeFileSync(
//             "./uploads/" + userId + "/main/" + photoName,
//             bufferPhoto,
//             "binary"
//         );
//         services.getInternalPreviewPhoto(bufferPhoto, resultPhoto => {
//             resultPhoto = services.toBuffer(resultPhoto);
//             fs.writeFileSync(
//                 "./uploads/" + userId + "/preview/" + photoName,
//                 resultPhoto,
//                 "binary"
//             );
//         }, 270, 270);
//         return Promise.resolve(base64Photo);
//     })

// }

// module.exports.readPhotoFromDisk = function (photoName, userId) {
//     let buffer = fs.readFileSync(
//         "./uploads/" + userId + "/preview/" + photoName
//     );
//     let base64 = "data:image/" + photoName.split(".")[1] + ";base64," + buffer.toString("base64");
//     return base64;
// }

module.exports.correctUser = function (query, correctUser) {
    return User.findOneAndUpdate(query, correctUser, {
        new: true
    });
}

module.exports.deleteUser = function (query) {
    return User.remove(query);
}

module.exports.getUser = function (query) {
    return User.findOne(query);
}


module.exports.getUserByUsername = function (username, callback) {
    const query = {
        username: username
    }
    return User.findOne(query, callback);
}

module.exports.comparePassword = function (candidatePassword, hash) {
    return bcrypt.compare(candidatePassword, hash);
}