const userModel = require('../model/user');
const friendsModel = require('../model/friends');
const utils = require('../utils');

module.exports.updateUser = (req, res, next) => {
    let userID = req.user._id + '';
    let updatedUser = req.body;
    userModel.correctUser({
        _id: userID
    }, updatedUser).then((result) => {
        return res.json({
            success: true,
            msg: 'success'
        })
    }).catch((err) => {
        return res.json({
            success: false,
            msg: 'fail'
        })
    });
}

module.exports.deleteUser = (req, res, next) => {
    let userID = req.query.userid;
    userModel.deleteUser({
        _id: userID
    }).then((result) => {
        return res.json({
            success: true,
            msg: 'success'
        })
    }).catch((err) => {
        return res.json({
            success: false,
            msg: 'fail'
        })
    });
}

module.exports.getOneUser = (req, res, next) => {
    let userID = req.query.userid;
    let imageQuality = req.query.quality;
    console.log('yy: ', userID, imageQuality)
    userModel.getUser({
        _id: userID
    }).then((result) => {
        result.profileImage = utils.readProfilePhotoFromDisk(result._id, imageQuality);
        return res.json({
            success: true,
            user: result
        })
    }).catch((err) => {
        return res.json({
            success: false,
            user: {}
        })
    });
}

module.exports.getUsers = async (req, res, next) => { //POST route
    try {
        let userIDs = req.body.userIDs;
        let getResults = await userModel.getUsers({
            _id: {
                $in: userIDs
            }
        });
        let sortedUsers = utils.sortArray(userIDs, getResults);
        return res.json({
            success: true,
            users: sortedUsers
        })
    } catch (error) {
        return res.json({
            success: false,
            users: []
        })
    }
}

module.exports.getAllUsers = async (req, res, next) => { //get route
    try {
        let allUsers = await userModel.getUsers({});
        // let sortedUsers = utils.sortArray(userIDs, getResults);
        for (let user of allUsers){
            user.profileImage.lowQuality = utils.readProfilePhotoFromDisk(user._id, 'low');
        }
        return res.json({
            success: true,
            users: allUsers
        })
    } catch (error) {
        return res.json({
            success: false,
            users: []
        })
    }
}

module.exports.getMyFriends = async (req, res, next) => {
    try {
        let imageQuality = req.query.quality + ''
        let userID = req.user._id + '';
        let listFriends = await getMyFriends(imageQuality, userID, false, '');
        return res.json({
            success: true,
            users: listFriends
        })
    } catch (error) {
        throw error
        return res.json({
            success: false,
            users: []
        })
    }


}
var getMyFriends = async (imageQuality, userID, isSearched, termSearch) => {
    let getResults = await friendsModel.getFriends({
        $or: [{
                firstUser: userID
            },
            {
                secondUser: userID
            }
        ]
    });
    let listFriends = [];
    for (let friend of getResults) {
        if (!friend.approved) continue;
        if (friend.firstUser + '' !== userID) {
            let userInfo = await userModel.getUser({
                _id: friend.firstUser
            });
            if (isSearched) {
                if (!userInfo.username.includes(termSearch)) continue;
            }
            if (imageQuality === 'low') {
                userInfo.profileImage.lowQuality = utils.readProfilePhotoFromDisk(userInfo._id, imageQuality);
            } else if (imageQuality === 'high') {
                userInfo.profileImage.highQuality = utils.readProfilePhotoFromDisk(userInfo._id, imageQuality);
            }
            listFriends.push(userInfo)
        } else {
            let userInfo = await userModel.getUser({
                _id: friend.secondUser
            });
            if (isSearched) {
                if (!userInfo.username.includes(termSearch)) continue;
            }
            if (imageQuality === 'low') {
                userInfo.profileImage.lowQuality = utils.readProfilePhotoFromDisk(userInfo._id, imageQuality);
            } else if (imageQuality === 'high') {
                userInfo.profileImage.highQuality = utils.readProfilePhotoFromDisk(userInfo._id, imageQuality);
            }
            listFriends.push(userInfo)
        }
    }
    return listFriends;
}


module.exports.searchFriends = async (req, res, next) => {
    let typeUser = req.query.typeuser;
    let termSearch = req.query.termsearch + '';
    if (typeUser === 'friend') {
        let listFriends = await getMyFriends('low', req.user._id + '', true, termSearch);
        console.log("33 _", listFriends)
        return res.json({
            success: true,
            users: listFriends
        })
    } else {
        let listFriends = await getMyFriends('low', req.user._id + '', true, termSearch);
        return res.json({
            success: true,
            users: listFriends
        })
    }

}


module.exports.getMe = (req, res, next) => {
    let userID = req.user._id;
    let imageQuality = req.query.quality;
    userModel.getUser({
        _id: userID
    }).then((result) => {
        if (imageQuality === 'low') {
            result.profileImage.lowQuality = utils.readProfilePhotoFromDisk(result._id, imageQuality);
        } else if (imageQuality === 'high') {
            result.profileImage.highQuality = utils.readProfilePhotoFromDisk(result._id, imageQuality);
        }
        return res.json({
            success: true,
            user: result
        })
    }).catch((err) => {
        return res.json({
            success: false,
            user: {}
        })
    });
}