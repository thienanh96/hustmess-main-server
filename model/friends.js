const mongoose = require('mongoose');

const FriendsSchema = mongoose.Schema({
    firstUser: {
        type: String,
        require: true
    },
    secondUser: {
        type: String,
        require: true
    },
    approved: {
        type: Boolean,
        require: true
    }
});

var Friends = module.exports = mongoose.model('Friends', FriendsSchema, 'Friends');

module.exports.createFriend = function (newFriends, callback) {
    return newFriends.save();
}


module.exports.getFriends = function (query, fields) {
    return Friends.find(query, fields);
}

module.exports.getFriend = function (query){
    return Friends.findOne(query);
}

module.exports.updateFriend = function(query,newFriends){
    return Friends.findOneAndUpdate(query, newFriends, {
        new: true
    });
}

module.exports.deleteFriend = function(query){
    return Friends.deleteOne(query);
}