const mongoose = require('mongoose');

const FileSchema = mongoose.Schema({
    originalName: {
        require: true,
        type: String
    },
    downloadLink: {
        require: true,
        type: String
    },
    fileType: {
        require: true,
        type: String
    },
    roomchatID: {
        require: true,
        type: String
    },
    time: {
        require: true,
        type: Number
    }
});

var File = module.exports = mongoose.model('File', FileSchema, 'File');

module.exports.createFile = function (newFile, callback) {
    return newFile.save();
}


module.exports.getImages = function (query, limit) {
    return File.find(query).sort({
        time: -1
    }).limit(limit)
}

module.exports.getFiles = function (query) {
    return File.find(query);
}

module.exports.getFile = function (query){
    return File.findOne(query);
}

module.exports.updateFile = function(query,newFile){
    return File.findOneAndUpdate(query, newFile, {
        new: true
    });
}

module.exports.deleteFile = function(query){
    return File.deleteOne(query);
}