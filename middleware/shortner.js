let url = require('url');
let isURL = require('is-url');
let moment = require('moment');
let mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dbClient = require('../db/manager.js');



console.log(moment().format('L'));
console.log(isURL("https://www.google.com"));