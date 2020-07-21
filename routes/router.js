const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', indexController.index);