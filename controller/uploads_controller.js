let multer = require('multer');
let allowedFileTypes = ['.png', '.gif', '.jpeg', '.jpg', '.mp3', '.mp4', '.pdf', '.docx', '.doc', '.xls', '.xlsm', '.xlsx', '.ppt', '.pptx', '.pps', '.ppsx', '.rar', '.zip', '.flv', '.m4v', '.bmp', '.txt']
let imageTypes = ['.png', '.gif', 'jpeg', '.jpg', '.bmp', '.mp4', '.flv', '.m4u', '.mp3'];
let videoTypes = ['.mp4', '.flv', '.m4u'];
const directoryExists = require('directory-exists');
const path = require("path");
const utils = require('../utils');
const fs = require('fs');


module.exports.uploadFiles = (req, res, next) => {
    let inDiskFileName = '';
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            let roomchatID = req.query.roomchatid;
            if (roomchatID) {
                directoryExists('./uploads/fileupload/' + roomchatID).then(result => {
                    if (result) {
                        return cb(null, './uploads/fileupload/' + req.query.roomchatid)
                    } else {
                        fs.mkdir('./uploads/fileupload/' + req.query.roomchatid, (err) => {
                            if (err) {
                                return cb('create folder failed', false);
                            } else {

                                return cb(null, './uploads/fileupload/' + req.query.roomchatid)
                            }
                        })
                    }
                });
            } else {
                cb('roomchatid invalid', false)
            }

        },
        filename: function (req, file, cb) {
            inDiskFileName = Date.now() + '.time.' + file.originalname;
            cb(null, inDiskFileName)
        }
    })
    let upload = multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(file.originalname);
            if (!allowedFileTypes.includes(ext + '')) {
                return callback('typeNotSupported', false)
            }
            callback(null, true)
        },
        limits: {
            fileSize: 1024 * 1024 * 1024
        }
    }).any();

    upload(req, res, function (err) {
        if (err) {
            console.log('loi roi', err)
            if (err.code == 'LIMIT_FILE_SIZE') {
                return res.send({
                    success: false,
                    type: 'limit-file-size',
                    msg: 'Max size of image is 2 MB'
                });
            } else if (err === 'typeNotSupported') {
                return res.send({
                    success: false,
                    type: 'type-not-supported'
                });
            }
        }
        let filename = req.files[0].originalname;
        console.log('Filename: ',filename)
        let ext = path.extname(filename);
        if (imageTypes.includes(ext + '')) {
            return res.json({
                success: true,
                fileType: 'image',
                imageSource: "data:image/" + ext.replace('.', '') + ";base64," + fs.readFileSync(req.files[0].path).toString('base64'),
                fileName: inDiskFileName,
                originalName: filename
            })
        } else {
            console.log('oke file')
            return res.json({
                success: true,
                fileType: 'application',
                downloadLink: 'http://localhost:3333/downloads/' + inDiskFileName + '?roomchatid=' + req.query.roomchatid,
                fileName: inDiskFileName,
                originalName: filename
            })
        }



    })


}

module.exports.getFiles = (req, res, next) => {
    let roomchatID = req.query.roomchatid;
    let typeFile = req.query.type;
    let dirname = './uploads/fileupload/' + roomchatID;
    let files = [];
    try {
        fs.readdir(dirname, function (err, filenames) {
            if (err) {
                return res.json({
                    success: false
                })
            }
            // let files = [];
            for (let filename of filenames) {
                if (typeFile === 'image') {
                    let ext = path.extname(filename);
                    if (imageTypes.includes(ext)) {
                        files.push({
                            fileType: 'image',
                            imageSrc: "data:image/" + ext.replace('.', '') + ";base64," + fs.readFileSync(dirname + '/' + filename).toString('base64')
                        })
                    }
                } else if (typeFile === 'application') {
                    let ext = path.extname(filename);
                    if (!imageTypes.includes(ext)) {
                        let fileNameLength = filename.split('.').length;
                        let fileName = filename.split('.')[fileNameLength - 2];
                        files.push({
                            fileType: 'application',
                            downloadLink: 'http://localhost:3333/downloads/' + filename + '?roomchatid=' + roomchatID,
                            fileName: fileName + ext + ''
                        })
                    }
                }

            }
            return res.json({
                success: true,
                files: files
            })
        });
    } catch (error) {
        return res.json({
            success: false,
            files: []
        })
    }

}