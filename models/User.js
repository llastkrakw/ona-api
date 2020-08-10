var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var isEmail =  require('email-validator')

var UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!isEmail.validate(value)) throw Error("Invalid email");
        }
    },

    password: {
        desc: "user password",
        trim: true,
        type: String,
        required: true,
        unique : true
    },

    collections: [{ type: Schema.Types.ObjectId, ref: 'Collection'}],

    links: [{ type: Schema.Types.ObjectId, ref: 'Link'}],

    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

    createAt: {
        type: Date,
        required: false,
        default: Date.now
    }

});

exports.UserModel = mongoose.model('User', UserSchema, 'users');