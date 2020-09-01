
const request = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};


/*get home page */
const renderTournament = (req, res) => {
    res.render('tournament', {
      title: 'Dig Pink tournament serv cont loc.js',
      pageHeader:{
        title: 'Dig Pink Tournament September 25, 2020'
      },
      locations: [{
        school: 'Staley'
      },{
        school: 'Oak Park'
      },{
        school: 'Winnetonka'  
      },{
        school: 'North Kansas City'  
      }]
})};

constTournament 
module.exports = {
    
};