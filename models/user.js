
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
  favorites: [
    {
      title: String,
      picture: String,
      movieId: Number,
    }
  ],
  related: [
    {
      title: String,
      picture: String,
      movieId: Number,
    }
  ],
});

module.exports = mongoose.model('User', userSchema);
