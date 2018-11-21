const mongoose = require('mongoose');



const SocketSchema = mongoose.Schema({
    socketID: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        require: true
    }
});



var Socket = module.exports = mongoose.model('Socket', SocketSchema, 'Socket');




module.exports.createSocket = function (newSocket) {
    return newSocket.save();
}

module.exports.getSockets = function (query) {
    return Socket.find(query);
}


module.exports.upda
teSocket = function (query, correctSocket) {
    return Socket.findOneAndUpdate(query, correctSocket, {
        new: true
    });
}

module.exports.getSocket = function (query) {
    return Socket.findOne(query);
}
