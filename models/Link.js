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

    shorthen_id: {
        type: Schema.Types.ObjectId,
        ref: 'ShortenLink',
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],

    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

    urlInfo: {
        header: Number,
        protocole: String,
        authority: String,
        path: String,
        port: Number,
        type: String,
        connection: String,
        status: String
    },

    createAt: {
        type: Date,
        required: true,
        default: Date.now()
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