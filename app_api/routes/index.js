const express = require('express');
const router = express.Router();
//const ctrlLocations = require('../controllers/locations');
const ctrlMemorials = require('../controllers/memorials');
const ctrlTournaments = require('../controllers/tournaments');
const ctrlRosters = require('../controllers/rosters');
const ctrlParticipants = require('../controllers/participants');

// tournament
router
  .route('/tournaments')
  .post(ctrlTournaments.schedulesCreate);
router  
  .route('/tournaments/:scheduleid')
  .get(ctrlTournaments.schedulesReadOne)
  .put(ctrlTournaments.schedulesUpdateOne)
  .delete(ctrlTournaments.schedulesDeleteOne);
  console.log("api index display 1")
 
// memorials  
router
  .route('/memorials')
  .post(ctrlMemorials.memorialsCreate)  
  .get(ctrlMemorials.getMemorials);
router  
  .route('/memorials/:memorialid')  
  .put(ctrlMemorials.memorialsUpdateOne)
  .delete(ctrlMemorials.memorialsDeleteOne);
  console.log("api index display 2")

// roster  
router
  .route('/rosters')
  .post(ctrlRosters.rostersCreate);
router  
  .route('/rosters/:rostersid')  
  .get(ctrlRosters.rostersReadOne)
  .put(ctrlRosters.rostersUpdateOne)
  .delete(ctrlRosters.rostersDeleteOne);
  console.log("api index display 2")

  // participants  
router
  .route('/partcipants')
  .post(ctrlParticipants.participantsCreate) 
  .get(ctrlParticipants.getParticipants);
 router  
  .route('/participants/:participantsid')
  .put(ctrlParticipants.participantsUpdateOne)
  .delete(ctrlParticipants.participantsDeleteOne);

console.log("api index display 3")

module.exports = router;

