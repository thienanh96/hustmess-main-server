const fs = require('fs');
const jimp = require('jimp');

module.exports.readProfilePhotoFromDisk = (userID, quality) => {
    if (!fs.existsSync("./uploads/profileimage/high-quality" + userID)) {
        userID = 'default.png'
    }
    if (quality === 'high') {
        let buffer = fs.readFileSync(
            "./uploads/profileimage/high-quality/" + userID
        );
        let base64 = "data:image/png;base64," + buffer.toString("base64");
        return base64;
    } else if (quality === 'low') {
        let buffer = fs.readFileSync(
            "./uploads/profileimage/low-quality/" + userID
        );
        let base64 = "data:image/png;base64," + buffer.toString("base64");
        return base64;
    } else {
        return ''
    }
}

module.exports.readImageFileFromDisk = (originalName, ext) => {
    ext = ext.split('.')[ext.split('.').length - 1].toLowerCase() + '';
    let buffer = fs.readFileSync(
        "./uploads/fileupload/" + originalName
    );
    let base64 = "data:image/" + ext + ";base64," + buffer.toString("base64");
    return base64;
}


module.exports.sortArray = (userIDs, getResults) => {
    let finalArr = [];
    for (let userid of userIDs) {
        for (let user of getResults) {
            if (userid + '' === user._id + '') {
                user.profileImage.lowQuality = module.exports.readProfilePhotoFromDisk(user._id, 'low');
                finalArr.push(user);
                break;
            }
        }
    }
    return finalArr
};


module.exports.checkEqualArr = (parentArr, childArr) => {
    let result = true;
    if (parentArr.length !== childArr.length) return false;
    for (let el of childArr) {
        if (!parentArr.includes(el + '')) {
            result = false;
        }
    }
    return result;
}

module.exports.makeSquareImage = async (path) => {
    try {
        let imageSource = await jimp.read(path);
        let width = imageSource.bitmap.width;
        let height = imageSource.bitmap.height;
        let photo;
        if(width >= height){
            let offset = (width - height)/2;
            photo = imageSource.crop(offset,0,height,height).resize(80,80).getBase64Async(jimp.AUTO);
        } else {
            let offset = (height - width)/2;
            photo = imageSource.crop(offset,0,width,width).resize(80,80).getBase64Async(jimp.AUTO);
        }
        return photo;
    } catch (error) {
        return null;
    }
}