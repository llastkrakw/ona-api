var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var LinkShema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true,
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

    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],

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