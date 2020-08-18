var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var isURL = require('is-url');


var LinkShema = new Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    url: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!isURL(value)) throw new Error("Invalid Url")
        }
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createAt: {
        type: Date,
        required: true,
        default: Date.now
    },

    cliked: {
        type: Number,
        default: 0
    },

    likes: {
        type: Number,
        default: 0
    },

    visibility: {
        type: Boolean,
        default: true
    }

});

exports.Link = mongoose.model('Link', LinkShema, 'links');