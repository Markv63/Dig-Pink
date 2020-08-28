const mongoose = require('mongoose');
const dbURI = `mongodb://localhost/dig-pink`;

mongoose.connect(dbURI, {useNewUrlParser: true});

const host = process.env.DB_HOST || '127.0.0.1';

const dbURL = `mongodb://${host}/digpink`;

//let host = process.env.DB_HOST || 'mongodb://127.0.0.1/dig-pink';
//let dbURL = `${host}`;
//to run SIGNIT on windows - before event listeners
const readLine = require ('readline');

/*const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, { useNewUrlParser: true, useCreateIndex: true }), 1000);
}*/

 
mongoose.connection.on('connected', () => {
  console.log(`Mongoose is connected`);
});
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error: ' + err);
    return connect();
});
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is dis-connected`);
});  

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close ( () => {
      console.log(`Mongoose dis-connected through ${msg}`);
      callback();
    });
};
// for nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
  });
});
// for app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
});
// for Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
      process.exit(0);
    });
});
//connect();
require('./tournaments');