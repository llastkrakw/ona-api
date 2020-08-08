var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GroupSchema = new Schema({

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

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    url: {
        type: String,
    },

    members: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    collections: [{ type: Schema.Types.ObjectId, ref: 'Collection' }],

    links: [{ type: Schema.Types.ObjectId, ref: 'Link' }],

    createAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

exports.Group = mongoose.model('Group', GroupSchema, 'groups');