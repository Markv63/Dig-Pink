const express = require('express');
const router = express.Router();
//const ctrlLocations = require('../controllers/locations');
const ctrlMemorials = require('../controllers/memorials');
const ctrlTournaments = require('../controllers/tournaments');
const ctrlRosters = require('../controllers/rosters');
const ctrlParticipants = require('../controllers/participants');
console.log("api index display 8", router);

  // participants  
  router
    .route('/participants')
    .post(ctrlParticipants.participantsCreate) 
    .get(ctrlParticipants.getParticipants);
  console.log("api index display 6", router);
 router  
   .route('/participants/:participantsid')
   .put(ctrlParticipants.participantsUpdateOne)
   .delete(ctrlParticipants.participantsDeleteOne);
  console.log("api index display 7");
  
// tournament
router
  .route('/tournaments')
  .post(ctrlTournaments.tournamentsCreate)
  .get(ctrlTournaments.getTournaments);
router  
  .route('/tournaments/:scheduleid')
  .put(ctrlTournaments.tournamentsUpdateOne)
  .delete(ctrlTournaments.tournamentsDeleteOne);
  console.log("api index display 1");
 
// memorials  
router
  .route('/memorials')
  .post(ctrlMemorials.memorialsCreate)  
  .get(ctrlMemorials.getMemorials);
router  
  .route('/memorials/:memorialid')  
  .put(ctrlMemorials.memorialsUpdateOne)
  .delete(ctrlMemorials.memorialsDeleteOne);
  console.log("api index display 2");

// roster  
router
  .route('/rosters')
  .post(ctrlRosters.rostersCreate)
  //.get(ctrlRosters.getRoster);
router  
  .route('/rosters/:rostersid')  
  .get(ctrlRosters.rostersReadOne)
  .put(ctrlRosters.rostersUpdateOne)
  .delete(ctrlRosters.rostersDeleteOne);
  console.log("api index display 4");

 console.log("api index display 3");

module.exports = router;

