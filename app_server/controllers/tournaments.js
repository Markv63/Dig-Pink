const request = require('request');

let apiOptions = {
  server: 'http://localhost:3000'
 };
 /*if (process.env.NODE_ENV === 'production') {
   apiOpitons.server = 'https://morning-cove-12019.herokuapp.com';
 }*/

const formatDistance = (distance) => {
  console.log("display server location.js 4");
  //distance = parseFloat(distance);
  //if (distance && isNumeric(distance)) {
  let thisDistance = 0;
  let unit = 'm';
  if (distance > 1000) {
    thisDistance = parseFloat(distance / 1000).toFixed(1);
    unit = 'km';
  } else {
    thisDistance = Math.floor(distance);
  }  
  return thisDistance + unit;
/*} else {
  return'?';  
  }*/
};

 
const isNumeric=function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const showError = (req, res, status) => {
  let title = '';
  let content = '';
  console.log("display server location.js 8");
  //console.log(response.statusCode);

  if (status === 404) {
    title = '404, page not found';
    content = 'Oh dear, Looks like we can\'t find this page. Sorry';
  } else {
    title = `${status}, something's gone wrong`;
    content = 'Something, somewhere, has gone just a litle bit wrong.';
  }
  res.status(status);
  res.render('generic-text', {
     title,
     content 
  });
};

const renderHomepage = function (req, res, responseBody) {
  let message = null;
  //console.log("display server location.js homepage 6");
 // console.log("length", responseBody);
  if (!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
  res.render('locations-list', {
    title: 'Dig Pink Side Out Foundation Fund Raiser',
    pageHeader: {
      title: 'Dig Pink',
      //strapline: 'Find places to work with wifi near you!'
    },
    //sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: responseBody,
    message
  });
  console.log("display server location.js homepage 10");
  //console.log(responseBody);
  //console.log(message);
};

const roster = function(req, res) {
 
  console.log("display server location.js 5 - roster");
  const path = '/api/tournaments';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs: {}
  };
      
  request(
    requestOptions,
    (err, response, body) => {
      let data = body;
        if (response.statusCode === 200 && data.length) {
        for (let i = 0; i < data.length; i++) { }
      }
      renderHomepage(req, res, body);
      }
  );
};



/*const renderMemorial = (req, res) => {
  res.render('location-info', {
       title: location.name,
       pageHeader: {
        title: location.name,
      },
      sidebar: {
        context: 'is on Loc8r because it has acessible wifi and space to sit down with your laptop and get some work done.',
        callToAction:  'if you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'           
      },
        location
    }
  );
};*/
