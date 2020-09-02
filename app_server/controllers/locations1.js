
const request = require('request');
//const { render } = require('pug');
let apiOptions = {
  server: 'http://localhost:3000'
};
/*if (process.env.NODE_ENV === 'Production') {
  apiOptions.server = '';
}*/
console.log("app serv location display 1");
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

/*get home page */

const renderParticipants = (req, res, responseBody) => {
  let message = null;
  if (!(responseBody instanceof Array)) {
    message = 'API lookup error';
    responseBody = [];
  } else {
    (!responseBody.length)  
      message = 'No schools found';
    }
  };
 res.render('tournaments',
  {
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
  /*);*/
  const renderParticipants = (req, res) => {
    const path = '/api/participants';
    const requestOptions = {
      url:`${apiOptions.server}${path}`,
      method: 'GET',
      json:{},
    };
  };
  /*request(
    requestOptions,
    (err, {statusCode}, body) => {
      let data = []
      if (statusCode === 200 && body.length) {
        data = body( (item) => {
        return item;
        });
      }
      renderHomepage(req, res, data);
    }
  );*/

module.exports = {
    
};