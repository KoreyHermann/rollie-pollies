const router = require('express').Router();
const listController = require('../controllers/listController');
const pollController = require('../controllers/pollController');
const withAuth = require('../utils/auth');

// route to create/add a home using async/await
router.get('/', listController.getLists);
router.get('/list/:id', withAuth, listController.getSingleList);
router.get('/poll/:id', withAuth, pollController.getSinglePoll);

module.exports = router;