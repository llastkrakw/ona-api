var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        desc: "user password",
        trim: true,
        type: String,
        required: false,
        select: false,
    },

    collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],

    links: [{ type: Schema.Types.ObjectId, ref: 'Link' }],

    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

    createAt: {
        type: Date,
        required: true,
        default: Date.now()
    }

});


exports.User = mongoose.model('User', UserSchema, 'users');