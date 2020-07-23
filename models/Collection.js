var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    groups: [{ type: Schema.Types.ObjectId, ref: 'Group' }],

    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    links: [{ type: Schema.Types.ObjectId, ref: 'Link' }],

    createAt: {
        type: Date,
        required: true,
        default: Date.now()
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


exports.Collection = mongoose.model('Collection', CollectionSchema, collections);