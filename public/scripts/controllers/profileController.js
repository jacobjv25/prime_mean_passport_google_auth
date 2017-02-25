app.controller('ProfileController', function ($http, AuthService, MovieService) {
  console.log('loaded ProfileController');
  var _this = this;
  _this.data = '';
  _this.show = false;
  _this.user = '';
  user = _this.user;
  _this.watchlist = [];
  _this.favoriteTitles = [];
  _this.queue = false;
  _this.favorites = false;
  _this.recommendations = false;
  _this.recommendedTitles = [];

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
      _this.favoriteTitles = response;
      console.log(_this.favoriteTitles);
    });
  };
  _this.getWatchlist = function(user) {
    console.log('getting watchlist');
    AuthService.getTheWatchlist(user).then(function(response){
      _this.watchlist = response;
      console.log(_this.watchlist);
    });
    AuthService.getRelated(user).then(function(response){
      console.log('related movies', response.data[0].related);
      _this.recommendedTitles = response.data[0].related;
    });
  };

  _this.addMovieToFavorites = function(title) {
    console.log("adding", title, "to favorites");
    AuthService.addQueueFavorite(title);
    location.reload();
    swal("Added to favorites!")
  }

  // _this.getRecommendations = function(user){
  //   console.log(user);
  //   AuthService.getRelated(user).then(function(response){
  //     console.log('related movies', response);
  //     _this.recommendedTitles = response;
  //   })
  // }

  _this.getFavorites();
  _this.getWatchlist();
  // _this.getRecommendations();

  _this.deleteFavoriteTitle = function(id) {
    AuthService.deleteFavorite(id).then(function(response){
      swal("Deleted!");
      location.reload();
    })
  }; // end of deleteFavoriteTitle

  _this.deleteFromWatchlist = function(id) {
    AuthService.deleteWatchlist(id).then(function(response){
      swal("Deleted!");
      location.reload();
    })
  }; // end of deleteFavoriteTitle

  _this.storeId = function(id){
    console.log(id);
    MovieService.storeMovieId(id);
  }

  _this.showQueue = function() {
    _this.queue = true;
    _this.favorites = false;
    _this.recommendations = false;
  }
  _this.showFavorites = function() {
    _this.favorites = true;
    _this.queue = false;
    _this.recommendations = false;
  }
  _this.showRecommendations = function() {
    _this.recommendations = true;
    _this.favorites = false;
    _this.queue = false;
  }


});
