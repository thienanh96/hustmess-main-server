const mongoose = require('mongoose');

const RoomChatSchema = mongoose.Schema({
    isSeenBy: Array,
    createdFromUserID: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    lastMessage: {
        userID: String,
        content: String
    },
    time: {
        type: Number,
        require: true
    }
});

var RoomChat = module.exports = mongoose.model('RoomChat', RoomChatSchema, 'RoomChat');

module.exports.createRoomChat = function (newRoomChat, callback) {
    return newRoomChat.save();
}


module.exports.getRoomChats = function (query, fields) {
    return RoomChat.find(query, fields).sort({
        time: 1
    })
}

module.exports.getRoomChat = function (query){
    return RoomChat.findOne(query);
}

module.exports.updateRoomChat = function(query,newRoomChat){
    return RoomChat.findOneAndUpdate(query, newRoomChat, {
        new: true
    });
}

module.exports.deleteRoomChat = function(query){
    return RoomChat.deleteOne(query);
}