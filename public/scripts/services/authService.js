angular.module('movieApp').service("AuthService", function($http){

  this.userId = '';
  this.movieId = '';
  this.watchlist = [];
  this.favorites = [];
  this.savedMovie = {
    'title': '',
    'picture': '',
    'movieId': ''
  };
  this.relatedMovie = {
    'title': '',
    'picture': '',
    'movieId': ''
  };

  this.getTheWatchlist = function(user) {
    return $http({
      method: 'GET',
      url: '/watchlist',
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
          sweetAlert('Sorry, you need to log in to add to your queue!');
        } else {
          return $http({
            method: 'POST',
            url: '/watchlist',
            data: movieInfo
          }).then(function(reponse){
            console.log(response);
          }).catch(function(err){
            console.log('error adding to watchlist', err);
          })
        }
      });
  }//end of addWatchList

  this.deleteWatchlist = function(id) {
    console.log("deleting", id);
    return $http({
      method: "DELETE",
      url: '/watchlist/' + id,
    }).then(function(response){
      console.log(response);
      return response;
    }).catch(function(err){
      console.log('error deleting title from watchlist', err);
    });
  };

  this.getTheFavorites = function(user) {
    return $http({
      method: 'GET',
      url: '/favorites',
    }).then(function(response){
      this.favorites = response.data[0].favorites;
      return this.favorites;
    }).catch(function(err){
      console.log("error getting favorites", err);
    })
  }//end of getTheFavorites

  this.addFavorite = function(info) {
    this.savedMovie.title = info.title;
    this.savedMovie.picture = info.poster_120x171;
    this.savedMovie.movieId = info.id;
    movieInfo = this.savedMovie;
    $http.get('/private/profile')
      .then(function (response) {
        if (response.data.err) {
          sweetAlert('Sorry, you need to log in to add to your queue!');
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

  this.addQueueFavorite = function(info) {
    this.savedMovie.title = info.title;
    this.savedMovie.picture = info.picture;
    this.savedMovie.movieId = info.movieId;
    movieInfo = this.savedMovie;
          return $http({
            method: 'POST',
            url: '/favorites',
            data: movieInfo
          }).then(function(reponse){
            return;
          }).catch(function(err){
            console.log('error adding favorite', err);
          })
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

  this.getRelated = function(user) {
    console.log(user);
    return $http({
      method: 'GET',
      url: '/related',
    }).then(function(response){
      console.log(response);
      return response;
    }).catch(function(err){
      console.log("error getting favorites", err);
    })
  }//end of getRelated

  this.addRelated = function(info) {
    let title = info.title;
    let picture = info.poster_120x171;
    let movieId = info.id;
    // movie = this.relatedMovie;
          console.log("adding to related");
          return $http({
            method: 'POST',
            url: '/related',
            data: {
              title: title,
              picture: picture,
              movieId: movieId
            }
          }).then(function(reponse){
            return;
          }).catch(function(err){
            console.log('error adding related', err);
          })
  }//end of addRelated

});//end of authService
