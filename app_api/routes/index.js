const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
//const ctrlReviews = require('../controllers/reviews');

// tournament
router
  //.route('/locations')
  //.get(ctrlLocations.locationsListByDistance)
  //.get(ctrlLocations.tournamentsCreate);
  console.log("api index display 1")
 
router
  //.route('/locations/:tournamentid')
  //.get(ctrLlocations.tournamentsReadOne)
  //.put(ctrlTournaments.tournamentsUpdateOne)
  //.delete(ctrlTournaments.tournamentsDeleteOne);
  console.log("api index display 2")

// Reviews
/*router
  .route('/locations/:locationid/reviews')
  .post(ctrlReviews.reviewsCreate);
*/
/*router
  .route('/locations/:locationid/reviews/:reviewid')
  .get(ctrlReviews.reviewsReadOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);
*/
module.exports = router;
