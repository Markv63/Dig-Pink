const express = require('express');
const router = express.Router();
 
const ctrlMemorials    = require('../controllers/memorials');
const ctrlTournaments  = require('../controllers/tournaments');
const ctrlRosters      = require('../controllers/rosters');
const ctrlParticipants = require('../controllers/participants');
const ctrlTeams        = require('../controllers/teams');

  // participants  
  router
    .route('/participants')
    .post(ctrlParticipants.participantsCreate) 
    .get(ctrlParticipants.getParticipants);
 
 router  
   .route('/participants/:participantsid')
   .get(ctrlParticipants.participantsReadOne)
   .put(ctrlParticipants.participantsUpdateOne)
   .delete(ctrlParticipants.participantsDeleteOne);
 
 
// tournament
router
  .route('/tournaments')
  .post(ctrlTournaments.tournamentsCreate)
  .get(ctrlTournaments.getTournaments);
router  
  .route('/tournaments/:tournamentid')
  .put(ctrlTournaments.tournamentsUpdateOne)
  .delete(ctrlTournaments.tournamentsDeleteOne);

 
// memorials  
router
  .route('/memorials')
  .get(ctrlMemorials.getMemorials)
  .post(ctrlMemorials.memorialsCreate); 
 
router  
  .route('/memorials/:memorialid')  
  .put(ctrlMemorials.memorialsUpdateOne)
  .delete(ctrlMemorials.memorialsDeleteOne);

  router  
  .route('/participants/:participantid/rosters')  
  .post(ctrlRosters.rostersCreate)
  .get(ctrlRosters.rostersReadOne);
   
 router
  .route('/participants/:participantid/rosters/:rosterid')
     
  .put(ctrlRosters.rostersUpdateOne)
  .delete(ctrlRosters.rostersDeleteOne);

// team
router
  .route('/teams/:teamsid')
  .get(ctrlTeams.getTeams);


module.exports = router;

