const express = require('express');
const router = express.Router();
//const ctrlLocations = require('../controllers/locations');
const ctrlMemorials = require('../controllers/memorials');
const ctrlTournaments = require('../controllers/tournaments');
const ctrlRosters = require('../controllers/rosters');

// tournament
router
  .route('/controllers/tournaments')
  .post(ctrlTournaments.schedulesCreate)
  .get(ctrlTournaments.schedulesReadOne)
  .put(ctrlTournaments.schedulesUpdateOne)
  .delete(ctrlTournaments.schedulesDeleteOne);
  console.log("api index display 1")
 
// memorials  
router
  .route('/controllers/memorials')
  .post(ctrlMemorials.memorialsCreate)  
  .get(ctrlMemorials.memorialsReadOne)
  .put(ctrlMemorials.memorialsUpdateOne)
  .delete(ctrlMemorials.memorialsDeleteOne);
  console.log("api index display 2")

// roster  
router
  .route('/controllers/rosters')
  .post(ctrlRosters.rostersCreate)  
  .get(ctrlRosters.rostersReadOne)
  .put(ctrlRosters.rostersUpdateOne)
  .delete(ctrlRosters.rostersDeleteOne);
  console.log("api index display 2")

  // participants  
router
.route('/controllers/tournaments')
//.get(ctrlTournaments.schedulesReadTwo)
console.log("api index display 3")


module.exports = router;

/*const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');
const ctrlMemorials = require('../controllers/memorials');
const ctrlSchedules = require('../controllers/schedules');

//Locations pages
router.get('/', ctrlLocations.tournament);

//memorial page - add in honors and memoirals
router.get('/memorials', ctrlMemorials.memorials);

//schedule page - add in honors and memoirals
router.get('/schedules', ctrlSchedules.schedules);*/


/*other pages - info on Side Out*/
/*router.get('/about', ctrlOthers.about);*/

