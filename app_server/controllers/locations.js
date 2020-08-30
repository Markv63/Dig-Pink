
/*get home page */
const tournament = (req, res) => {
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

/*get roster page */
const roster = (req, res) => {
    res.render('index', { title: 'roster serv cont loc locations.js'});
};

//console.log("locations.js locationInfo display 1");
/*get schedule page */
/*const locationInfo = (req, res) => {
    res.render('location-info', 
      { 
       title: 'schedule serv cont loc locations.js'});
      };*/       
 
/*const locationInfo = (req, res) => {
  res.render('location-info', 
  
    { 
      title: 'schedule serv cont loc locations.js',
       pageHeader: {
        title: "Schedule",
      },
        schedule: {
        team:     'Staley C team',
        home:     'home',
        opponent: 'Winnetonka C team',
        visitor:  'visitor',
        time:     '4:00pm',
        gym:      'Gym 1'  
      }
      
    }
  );  
  console.log("serv cont loc locinfo 2");     
};*/

module.exports = {
    tournament,
    //locationInfo,
    roster
};