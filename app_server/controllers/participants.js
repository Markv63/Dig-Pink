const request = require('request');
//const { render } = require('pug');
let apiOptions = {
  server: 'http://localhost:3000'
};
/*if (process.env.NODE_ENV === 'Production') {
  apiOptions.server = '';
}*/
console.log("app serv participant display ??");
console.log(apiOptions);

const showError = (req, res, status) => {
  let title = '';
  let content = '';

  if (status === 404) {
    let title = '404, page not found';
    content = 'Sorry, can\'t find this page';
  } else {
    title `${status}, something has gone wrong`;
  }
  res.status(status);
  res.render('generic-tex', {
    title,
    content
    })
  };


/* GET participants  page. */

console.log("serv control partciipant display 1");

const participants = (req, res) => {
  res.render('generic-text', 
   { 
      title: 'schools serv cont participants.js',
        pageHeader: {
          title: "Participants",
        },
        participants: {
          school:   "Staley"
        }
   });  
    console.log("serv cont schedule 2");     
  };


module.exports = {
      participants
};