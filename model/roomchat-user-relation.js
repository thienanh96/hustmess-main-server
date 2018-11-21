const mongoose = require('mongoose');

const RoomChatUserSchema = mongoose.Schema({
    roomChatID: {
        type: String,
        require: true
    },
    userID: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
    },
    time: {
        type: Number,
        require: true
    }
});

var RoomChatUser = module.exports = mongoose.model('RoomChatUser', RoomChatUserSchema, 'RoomChatUser');

module.exports.createRoomChatUser = function (newRoomChatUser) {
    return newRoomChatUser.save();
}


module.exports.getRoomChatUsers = function (query, fields) {
    return RoomChatUser.find(query, fields);
}

module.exports.getRoomChatUser = function (query){
    return RoomChatUser.findOne(query);
}

module.exports.updateRoomChatUser = function(query,newRoomChatUser){
    return RoomChatUser.findOneAndUpdate(query, newRoomChatUser, {
        new: true
    });
}

module.exports.deleteRoomChatUser = function(query){
    return RoomChatUser.deleteOne(query);
}

module.exports.insertManyRoomchatUsers = function(docs){
    return RoomChatUser.insertMany(docs);
}