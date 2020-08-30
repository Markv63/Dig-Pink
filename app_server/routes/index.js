const express = require('express');
const router = express.Router();

const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlMemorials = require('../controllers/memorials');
const ctrlSchedules = require('../controllers/schedules');

//Locations pages
router.get('/', ctrlLocations.tournament);

//memorial page - add in honors and memoirals
router.get('/memorials', ctrlMemorials.memorials);

//schedule page - add in honors and memoirals
router.get('/schedules', ctrlSchedules.schedules);


/*other pages - info on Side Out*/
router.get('/about', ctrlOthers.about);

module.exports = router;
