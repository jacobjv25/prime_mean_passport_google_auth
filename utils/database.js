/**
 * Connect to our database and output some helpful logging.
 *
 * @module utils/database
 */
var databaseUri = require('../config/database');
var mongoose = require('mongoose');

module.exports = function () {

  mongoose.connect(databaseUri);
  // mongoose.connect('mongodb://heroku_jxdknn4j:o5cu0b6hqgk0dda2pcatstj6fg@ds161029.mlab.com:61029/heroku_jxdknn4j');

  // When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + databaseUri);
  });

  // If the connection throws an error
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

};
