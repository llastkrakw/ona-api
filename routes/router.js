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

router.get('/users', userController.selectAll);

router.get('/users/:id', userController.selectUser);

router.post('/users/user', userController.addUser);

router.delete('/users/:id', userController.deleteUser);

router.patch('/users/:id', userController.updateUser);

/* Link */

router.get('/links', linkController.selectAll);

router.get('/links/link/:id', linkController.selectLink);

router.post('/links/link', linkController.addLink);

router.delete('/links/link/:id', linkController.deleteLink);

router.patch('/links/link/:id', linkController.updateLink);

/* Collection */

router.get('/collections', collectionController.selectAll);

router.get('/collections/collection/:id', collectionController.selectCollection);

router.post('/collections/collection', collectionController.addCollection);

router.delete('/collections/collection/:id', collectionController.deleteCollection);

router.patch('/collections/collection/:id', collectionController.updateCollection);

/* Group */

router.get('/groups', groupController.selectAll);

router.get('/groups/group/:id', groupController.selectGroup);

router.post('/groups/group', groupController.addGroup);

router.delete('/groups/group/:id', groupController.deleteGroup);

router.patch('/groups/group/:id', groupController.updateGroup);

/* LinkShorthen */

router.get('/shorts', shortenController.selectAll);

router.get('/shorts/short/:id', shortenController.selectShort);

router.post('/shorts/short', shortenController.addShort);

router.delete('/shorts/short/:id', shortenController.deleteShort);

router.patch('/shorts/short/:id', shortenController.updateShort);

module.exports = router;