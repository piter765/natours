const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/tours/:slug', viewsController.getTour); //should be tour here

module.exports = router;
