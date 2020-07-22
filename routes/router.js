const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const shortenController = require('../controllers/shortenController');
const linkController = require('../controllers/linkController');
const collectionController = require('../controllers/collectionController');
const userController = require('../controllers/userController');
const groupController = require('../controllers/groupController');

router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

/* GET home page. */
router.get('/', indexController.index);

/* User */

router.get('/users', keycloak.protect(), userController.selectAll);

router.get('/users/:id', keycloak.protect(), userController.selectUser);

router.get('/users/collections', keycloak.protect(), userController.selectCollections);

router.get('/users/collections/:id', keycloak.protect(), userController.selectCollection);

router.get('/users/collections/own', keycloak.protect(), userController.selectOwnCollection);

router.get('/users/collections/other', keycloak.protect(), userController.selectOtherCollection);

router.get('/users/group', keycloak.protect(), userController.selectGroups);

router.get('/users/group/:id', keycloak.protect(), userController.selectGroup);

/* Link */


/* Collection */


/* Group */


/* LinkShorthen */

module.exports = router;