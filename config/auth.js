const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/user');
const config = require('../config/database');

const secret = 'yoursecret';
module.exports.secret = secret;

module.exports.JWT = function (passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
    opts.secretOrKey = secret;
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        let query;

        if (jwt_payload._doc === undefined) {
            query = {
                _id: jwt_payload._id
            }
        } else {
            query = {
                _id: jwt_payload._doc._id
            };
        }
        userModel.getUser(query).then(user => {
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        },(err) => {
            return done(err, false);
        })
    }));
}

// module.exports.socialAuth = {

//     'facebookAuth': {
//         'clientID': '1972338099664129', // your App ID
//         'clientSecret': '67343171cead4d61f3ad275a20025ed2', // your App Secret
//         'callbackURL': 'http://localhost:4200/'
//     },

//     'googleAuth': {
//         'clientID': '267825466382-sj3e4nh9g8sr8qbk5bv1mqaj8p8031oh.apps.googleusercontent.com',
//         'clientSecret': 'es4d-agUuvQ9VCsWV-53v-Wg',
//         'callbackURL': 'http://localhost:4200'
//     }

// };