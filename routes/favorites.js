var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function (req, res) {
  User.find({ "_id": req.user._id }, function (err, response) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    res.send(response);
  });
});

router.post('/', function (req, res) {
  var userFavorite = req.body;
  var user = req.user;
  console.log('posting user favorite:', userFavorite, "user:", user);
  User.findByIdAndUpdate(
          user._id,
          {$push: {"watchlist": userFavorite}},
          function (err) {
            if (err) {
              console.log('Error saving', err);
              res.sendStatus(500);
              return;
            }
            res.sendStatus(201);
          }
      )
}); // end of post

router.delete('/:id', function (req, res) {
  var userFavorite = req.params.id;
  var userId = req.user._id;
  console.log('user id:', userId, 'favorite entry id:', userFavorite);
  User.findById(userId, function(err, user){
    user.watchlist.id(userFavorite).remove();
    user.save(function(err){
      if (err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(204);
    });
  });
});// end of delete


module.exports = router;
