var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShortenLinkSchema = new Schema({

    link_id : {
        type : Schema.Types.ObjectId,
        ref : 'Link',
        required : true
    },
    
});


exports.ShortenLink = mongoose.model('ShortenLink', ShortenLinkSchema, 'shortens');