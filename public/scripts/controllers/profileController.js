app.controller('ProfileController', function ($http, AuthService) {
  console.log('loaded ProfileController');
  var _this = this;
  _this.data = '';
  _this.show = false;
  _this.user = '';
  user = _this.user;
  _this.watchlist = [];

  $http.get('/private/profile')
    .then(function (response) {
      if (response.data.err) {
        _this.data = 'Sorry, you are not logged in!';
      } else {
        _this.data = response.data.message;
        _this.user = response.data.user;
        _this.show = true;
      }
    });

  _this.getFavorites = function(user) {
    console.log('getting favorites');
    AuthService.getTheFavorites(user).then(function(response){
      _this.watchlist = response;
    });
  };

  _this.getFavorites();

});
