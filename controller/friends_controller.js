const friendsModel = require('../model/friends');

module.exports.createFriend = (req, res, next) => { //ket ban
    let newFriendRequest = new friendsModel({
        firstUser: req.user._id + '',
        secondUser: req.body.secondUser,
        approved: false
    });
    return friendsModel.createFriend(newFriendRequest).then(result => {
        return res.json({
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        return res.json({
            success: false,
            msg: 'fail'
        })
    })
}

module.exports.updateFriend = async (req, res, next) => {
    try {
        let firstUser = req.query.firstuser;
        let secondUser = req.user._id + '';
        let newFriend = req.body;
        let putResult = await friendsModel.updateFriend({
            $and: [{
                    firstUser: firstUser
                },
                {
                    secondUser: secondUser
                }
            ]
        }, newFriend);
        return res.json({

        })
    } catch (error) {

    }
}


module.exports.getFriends = async (req, res, next) => {
    try {
        let isApproved = req.query.approved;
        if(isApproved === 'true'){
            isApproved = true;
        } else if (isApproved === 'false'){
            isApproved = false;
        } else {
            return res.json({
                success: false

            })
        }
        let myID = req.user._id + '';
        let getResults = await friendsModel.getFriends({
            $or: [{
                    firstUser: myID
                },
                {
                    secondUser: myID
                }
            ]
        });
        let returnFriends = getResults.filter(el => el.approved === isApproved).map(el  => {
            if(el.firstUser + '' === myID){
                return el.secondUser
            } else {
                return el.firstUser
            }
        })
        return res.json({
            success: true,
            myID: req.user._id + '',
            friends: returnFriends
        })
    } catch (error) {
        throw error;
        return res.json({
            success: false,
            friends: []
        })
    }
}


module.exports.deleteFriend = (req, res, next) => { // huy ket ban
    let firstUser = req.query.firstuser;
    let secondUser = req.user._id + '';
    return friendsModel.deleteFriend({
        $or: [{
                $and: [{
                        firstUser: firstUser
                    },
                    {
                        secondUser: secondUser
                    }
                ]
            },
            {
                $and: [{
                        firstUser: secondUser
                    },
                    {
                        secondUser: firstUser
                    }
                ]
            }
        ]

    }).then(result => {
        return res.json({
            success: true,
            msg: 'success'
        })
    }).catch(err => {
        return res.json({
            success: false,
            msg: 'fail'
        })
    })
}