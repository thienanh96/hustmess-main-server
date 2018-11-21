const fs = require('fs');
module.exports.download = (req,res,next) => {
    let originalName = req.params.filename;
    let roomchatID = req.query.roomchatid;
    let path = './uploads/fileupload/' + roomchatID + '/' + originalName;
    return res.download(path);
}