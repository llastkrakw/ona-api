const connectionString = "mongodb+srv://djouendjeu_emma:TIMBILSTE12@cluster0.js0ku.mongodb.net/onadb?retryWrites=true&w=majority";

let mongoose = require('mongoose');
mongoose.connect(`${connectionString}`, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });

exports.connect = () => mongoose.connection;