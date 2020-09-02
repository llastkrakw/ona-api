const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');
const shortenController = require('../controllers/shortenController');
const linkController = require('../controllers/linkController');
const collectionController = require('../controllers/collectionController');
const userController = require('../controllers/userController');
const groupController = require('../controllers/groupController');
const loginService = require('../services/Login');

router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next()
});

/* GET home page. */
router.get('/', indexController.index);

router.get('/sh/:hash', indexController.sender);

/* User */

router.get('/users', userController.selectAll);

router.get('/users/:id', userController.selectUser);

router.post('/users/user', userController.addUser);

router.delete('/users/:id', userController.deleteUser);

router.patch('/users/:id', userController.updateUser);

router.post('/login', loginService.login);

/* Link */

router.get('/links', linkController.selectAll);

router.get('/links/:id', linkController.selectLink);

//router.get('links/:id/status', linkController.linkStatus);

router.get('/links/:id/short', linkController.linkShorten);

router.post('/links/link', linkController.addLink);

router.delete('/links:id', linkController.deleteLink);

router.patch('/links/:id', linkController.updateLink);

/* Collection */

router.get('/collections', collectionController.selectAll);

router.get('/collections/:id', collectionController.selectCollection);

router.post('/collections/collection', collectionController.addCollection);

router.delete('/collections/:id', collectionController.deleteCollection);

router.patch('/collections/:id', collectionController.updateCollection);

router.post('/collections/:id/:linkId', collectionController.updateLinkCollection);

router.post('/collections/fork/:id/:userId', collectionController.updateUserCollection);


/* Group */

router.get('/groups', groupController.selectAll);

router.get('/groups/:id', groupController.selectGroup);

router.post('/groups/group', groupController.addGroup);

router.delete('/groups/:id', groupController.deleteGroup);

router.patch('/groups/:id', groupController.updateGroup);

/* LinkShorthen */

router.get('/shorts', shortenController.selectAll);

router.get('/shorts/:id', shortenController.selectShort);

router.post('/shorts/short/:linkId', shortenController.addShort);

router.delete('/shorts/:id', shortenController.deleteShort);

router.patch('/shorts/:id', shortenController.updateShort);

module.exports = router;