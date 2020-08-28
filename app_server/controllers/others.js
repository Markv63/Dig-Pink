/* GET home page. */
const about = function(req, res) {
    res.render('generic-text', { 
      title: 'About Dig Pink',
      content: 'Dig Pink'
  });
};
  
  module.exports = {
      about
  };