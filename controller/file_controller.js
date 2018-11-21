const directoryExists = require('directory-exists');
const path = require("path");
const utils = require('../utils');
const fs = require('fs');
const fileModel = require('../model/files');

module.exports.getFiles = async (req, res, next) => {
    let roomchatID = req.query.roomchatid;
    let typeFile = req.query.type;
    let timeSeq = req.query.time;
    let limit = req.query.limit;
    let dirname = './uploads/fileupload/' + roomchatID;
    let files = [];
    try {
        if(typeFile === 'image'){
            console.log('check time: ',timeSeq)
            let getImagesResult = await fileModel.getImages({
                roomchatID: roomchatID,
                fileType: 'image',
                time: {
                    $lt: parseInt(timeSeq)
                }
            }, parseInt(limit));
            for(let image of getImagesResult){
                let ext = path.extname(image.originalName);
                let squarePhoto = await utils.makeSquareImage(dirname + '/' + image.downloadLink);
                files.push({
                    fileType: 'image',
                    imageSrc: squarePhoto,
                    time: image.time
                })
            }
        } else if (typeFile === 'application'){
            let getFilesResult = await fileModel.getFiles({
                roomchatID: roomchatID,
                fileType: 'application'
            });
            files = getFilesResult.map(el => {
                return {
                    fileType: 'application',
                    downloadLink: el.downloadLink,
                    fileName: el.originalName
                }
            })
        }
        return res.json({
            success: true,
            files: files
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            files: []
        })
    }

    // try {
    //     fs.readdir(dirname, function (err, filenames) {
    //         if (err) {
    //             return res.json({
    //                 success: false
    //             })
    //         }
    //         // let files = [];
    //         for (let filename of filenames) {
    //             if (typeFile === 'image') {
    //                 let ext = path.extname(filename);
    //                 if (imageTypes.includes(ext)) {
    //                     files.push({
    //                         fileType: 'image',
    //                         imageSrc: "data:image/" + ext.replace('.', '') + ";base64," + fs.readFileSync(dirname + '/' + filename).toString('base64')
    //                     })
    //                 }
    //             } else if (typeFile === 'application') {
    //                 let ext = path.extname(filename);
    //                 if (!imageTypes.includes(ext)) {
    //                     let fileNameLength = filename.split('.').length;
    //                     let fileName = filename.split('.')[fileNameLength - 2];
    //                     files.push({
    //                         fileType: 'application',
    //                         downloadLink: 'http://localhost:3333/downloads/' + filename + '?roomchatid=' + roomchatID,
    //                         fileName: fileName + ext + ''
    //                     })
    //                 }
    //             }

    //         }
    //         return res.json({
    //             success: true,
    //             files: files
    //         })
    //     });
    // } catch (error) {
    //     return res.json({
    //         success: false,
    //         files: []
    //     })
    // }

}