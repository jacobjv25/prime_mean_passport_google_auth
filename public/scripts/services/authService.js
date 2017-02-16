angular.module('movieApp').service("AuthService", function($http){

  this.userId = '';
  this.movieId = '';
  this.watchlist = [];
  this.savedMovie = {
    'title': '',
    'picture': '',
    'movieId': ''
  };

  this.getTheFavorites = function(user) {
    return $http({
      method: 'GET',
      url: '/favorites',
    }).then(function(response){
      this.watchlist = response.data[0].watchlist;
      return this.watchlist;
    }).catch(function(err){
      console.log("error getting favorites", err);
    })
  }//end of getTheFavorites

  this.addWatchList = function(info) {
    this.savedMovie.title = info.title;
    this.savedMovie.picture = info.poster_120x171;
    this.savedMovie.movieId = info.id;
    movieInfo = this.savedMovie;
    $http.get('/private/profile')
      .then(function (response) {
        if (response.data.err) {
          sweetAlert('Sorry, you need to log in to add to your watchlist!');
        } else {
          return $http({
            method: 'POST',
            url: '/favorites',
            data: movieInfo
          }).then(function(reponse){
            console.log(response);
          }).catch(function(err){
            console.log('error adding favorite', err);
          })
        }
      });
  }//end of addWatchList

  this.deleteFavorite = function(id) {
    console.log("deleting", id);
    return $http({
      method: "DELETE",
      url: '/favorites/' + id,
    }).then(function(response){
      console.log(response);
      return response;
    }).catch(function(err){
      console.log('error deleting favorite', err);
    });
  };

});//end of authService
