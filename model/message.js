const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    fromUserID: {
        type: String,
        require: true
    },
    roomChatID: {
        type: String,
        require: true
    },
    content: { // neu khong co thi bang ''
        type: String,
        require: true
    },
    file: {
        type: String,
        require: true
    },
    // attach: { // neu khong co thi bang ''
    //     type: String, 
    //     require: true
    // },
    // fileType: {
    //     type: String,
    //     require: true
    // },
    // fileName: {
    //     type: String,
    //     require: true
    // },
    time: {
        type: Number,
        require: true
    },
    exclude: Array
});

var Message = module.exports = mongoose.model('Message', MessageSchema, 'Message');

module.exports.createMessage = function (newMessage, callback) {
    return newMessage.save();
}


module.exports.getMessages = function (query, limit) {
    return Message.find(query).sort({
        time: -1
    }).limit(limit);
}

module.exports.getOneMessage = function (query) {
    return Message.findOne(query);
}

module.exports.updateMessage = function (query, newMessage) {
    return Message.findOneAndUpdate(query, newMessage, {
        new: true
    });
}

module.exports.deleteMessage = function (query) {
    return Message.deleteOne(query);
}

module.exports.updateManyMessages = function (query, newMessage) {
    return Message.updateMany(query, newMessage);
}