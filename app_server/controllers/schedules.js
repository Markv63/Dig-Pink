/* GET schedule  page. */
console.log("serv control schedule display 1");

const schedules = (req, res) => {
  res.render('generic-text', 
   { 
      title: 'schedule serv cont loc locations.js',
        pageHeader: {
          title: "Schedule",
        },
          schedules: [{
          team:     'Staley C team',
          home:     'home',
          opponent: 'Winnetonka C team',
          visitor:  'visitor',
          time:     '4:00pm',
          gym:      'Gym 1'  
        }]
      }
    );  
    console.log("serv cont schedule 2");     
  };


module.exports = {
      schedules
};

