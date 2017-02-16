angular.module('movieApp').service("AuthService", function($http){

  this.userId = '';
  this.movieId = '';
  this.watchlist = [];

  this.getTheFavorites = function(user) {
    return $http({
      method: 'GET',
      url: '/favorites',
      data: user
    }).then(function(response){
      return response.data;
    })
  }

  this.addWatchList = function(info) {
    $http.get('/private/profile')
      .then(function (response) {
        if (response.data.err) {
          sweetAlert('Sorry, you need to log in to add to your watchlist!');
        } else {
          this.movieId = info.id;
          console.log(this.movieId);
          return $http({
            method: 'PUT',
            url: '/favorites/',
            data: info
          }).then(function(reponse){
            console.log(response);
          })
        }
      });//end of authentication
  }

});//end of authService
