let express = require('express');
let router = express.Router();
//const ctrlMain = require('../controllers/main');

const homepageController = (req, res) => {
  res.render('index', {title: 'Dig Pink'});
};

/* GET home page. */
//router.get ('/', ctlrMain.index);
router.get ('/', homepageController);



module.exports = router;
