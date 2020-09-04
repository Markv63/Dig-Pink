const express = require('express');
const router = express.Router();

const ctrlTournaments = require('../controllers/tournaments');
const ctrlOthers = require('../controllers/others');
const ctrlMemorials = require('../controllers/memorials');
const ctrlSchedules = require('../controllers/schedules');
const ctrlParticipants = require('../controllers/participants');

//Locations pages
router.get('/tournaments', ctrlTournaments.tournaments);

//memorial page - add in honors and memoirals
router.get('/memorials', ctrlMemorials.memorials);

//schedule page - add in honors and memoirals
router.get('/schedules', ctrlSchedules.schedules);

/*Participants*/
router.get('/participants', ctrlParticipants.participants);

/*other pages - info on Side Out*/
router.get('/about', ctrlOthers.about);

module.exports = router;
