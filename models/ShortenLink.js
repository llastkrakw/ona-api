var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var isURL = require('is-url');
var btoa = require('btoa');

var ShortenLinkSchema = new Schema({

    link_id : {
        type : Schema.Types.ObjectId,
        ref : 'Link',
        required : true
    },

    shortenUrl : {

        type: String,
        trim: true,
        validate(value) {
            if (!isURL(value)) throw new Error("Invalid Url")
        }

    }
    
});


exports.ShortenLink = mongoose.model('ShortenLink', ShortenLinkSchema, 'shortens');