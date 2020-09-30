const express = require('express');
const router = express.Router();
 
const ctrlMemorials    = require('../controllers/memorials');
const ctrlTournaments  = require('../controllers/tournaments');
const ctrlRosters      = require('../controllers/rosters');
const ctrlParticipants = require('../controllers/participants');
const ctrlTeams        = require('../controllers/teams');
//console.log("api index display 8", router);
// non impact change
  // participants  
  router
    .route('/participants')
    .post(ctrlParticipants.participantsCreate) 
    .get(ctrlParticipants.getParticipants);
  //console.log("api index display 6", router);
 router  
   .route('/participants/:participantsid')
   .get(ctrlParticipants.participantsReadOne)
   .put(ctrlParticipants.participantsUpdateOne)
   .delete(ctrlParticipants.participantsDeleteOne);
  console.log("api index display 7");
 
// tournament
router
  .route('/tournaments')
  .post(ctrlTournaments.tournamentsCreate)
  .get(ctrlTournaments.getTournaments);
router  
  .route('/tournaments/:tournamentid')
  .put(ctrlTournaments.tournamentsUpdateOne)
  .delete(ctrlTournaments.tournamentsDeleteOne);
  console.log("api index display 1");
 
// memorials  
router
  .route('/memorials')
  .get(ctrlMemorials.getMemorials)
  .post(ctrlMemorials.memorialsCreate); 
 
router  
  .route('/memorials/:memorialid')  
  .put(ctrlMemorials.memorialsUpdateOne)
  .delete(ctrlMemorials.memorialsDeleteOne);
  console.log("api index display 2");

// roster  
/*router
  .route('/rosters')
  .post(ctrlRosters.rostersCreate)
  .get(ctrlRosters.getRosters);
  console.log("api index display 3");
router  
  .route('/rosters/:rostersid')  
  //.get(ctrlRosters.rostersReadOne)
  //.put(ctrlRosters.rostersUpdateOne)
  //.delete(ctrlRosters.rostersDeleteOne);*/
  //console.log("api index display 4");

  router  
  .route('/participants/:participantid/rosters')  
  .post(ctrlRosters.rostersCreate)
  .get(ctrlRosters.rostersReadOne);
   
  console.log("api index display 4");
  
  router
  .route('/participants/:participantid/rosters/:rosterid')
     
  .put(ctrlRosters.rostersUpdateOne)
  .delete(ctrlRosters.rostersDeleteOne);
 


// team
router
  .route('/teams/:teamsid')
  //.post(ctrlRosters.rostersCreate)
  .get(ctrlTeams.getTeams);
  //get(ctrlRosters/function) 

module.exports = router;

