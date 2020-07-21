const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;