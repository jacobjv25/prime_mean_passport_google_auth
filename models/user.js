/**
 * User schema for Mongoose.
 *
 * @module models/user
 */
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  googleId: String,
  googleToken: String,
  googleEmail: String,
  googleName: String,
  watchlist: [
    {
      title: String,
      picture: String,
      movieId: Number,
    }
  ],
});

module.exports = mongoose.model('User', userSchema);
