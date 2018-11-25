const mongoose = require('mongoose');

const NotificationSchema = mongoose.Schema({
    fromUserID: {
        type: String,
        require: true
    },
    toUserID: {
        type: String,
        require: true
    },
    detail: { 
        type: Object,
        require: true
    },
    seen: {
        type: Boolean,
        require: true
    },
    time: {
        type: Number,
        require: true
    }
});

var Notification = module.exports = mongoose.model('Notification', NotificationSchema, 'Notification');

module.exports.createNotification = function (newNotification, callback) {
    return newNotification.save();
}


module.exports.getNotifications = function (query, limit) {
    return Notification.find(query).sort({
        time: -1
    }).limit(limit);
}

module.exports.getOneNotification = function (query) {
    return Notification.findOne(query);
}

module.exports.updateNotification = function (query, newNotification) {
    return Notification.findOneAndUpdate(query, newNotification, {
        new: true
    });
}

module.exports.deleteNotification = function (query) {
    return Notification.deleteOne(query);
}

module.exports.updateManyNotifications = function (query, newNotification) {
    return Notification.updateMany(query, newNotification);
}