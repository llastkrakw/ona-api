require('dotenv').config()

let mongoose = require('mongoose');
mongoose.connect( process.env.DATABASE_URL, { autoIndex: false , useNewUrlParser: true, useUnifiedTopology: true });

exports.connect = () => mongoose.connection;