angular.module('movieApp').service("MovieService", function($http){

  var API = "http://api-public.guidebox.com/v2/";
  var apiKey = "?api_key=43a48755edd6c58e4272608642c1120e2a96f99a";

  this.details = null;
  this.movieId = null;
  this.showId = null;
  this.search = null;

  this.searchMovieDatabase = function(search){
    this.search = search;
    console.log('searching for', search);
    return $http({
      method: 'GET',
      url: API + "search" + apiKey + "&type=movie&field=title&query=" + search
    }).then(function(response){
      console.log("Got a response from the API", response);
      return response;
    })
  }//end of searchMovieDatabase

  this.searchTvDatabase = function(search){
    console.log('searching for tv', search);
    return $http({
      method: 'GET',
      url: API + "search" + apiKey + "&type=show&field=title&query=" + search
    }).then(function(response){
      console.log("API TV response", response);
      return response;
    });
  };//end of searchTvDatabase

  this.searchMovieDetails = function(search){
    console.log('searching for', search);
    return $http({
      method: 'GET',
      url: API + 'movies/' + search + apiKey
    }).then(function(response){
      console.log("Detailed search response from the API", response);
      this.details = response;
      this.showId = null;
      return response;
    });
  };//end of searchDetails

  this.searchTvDetails = function(search){
    console.log('searching for', search);
    return $http({
      method: 'GET',
      url: API + 'shows/' + search + apiKey + '&sources=free,tv_everywhere,subscription,purchase'
    }).then(function(response){
      console.log("Detailed TV search response from the API", response);
      this.details = response;
      this.movieId = null;
      return response;
    });
  };//end of searchDetails


  this.storeMovieId = function(id){
    this.movieId = id;
    console.log(this.movieId);
  }

  this.storeShowId = function(id){
    this.showId = id;
    console.log(this.showId);
  }

});//end of MovieService

// SEARCH url: API + "search" + apiKey + "&type=movie&field=title&query=" + search

//http://api-public.guidebox.com/v2/
//movies/135934?api_key=YOUR_API_KEY

// http://api-public.guidebox.com/v2/
// search?api_key=YOUR_API_KEY
// &type=movie&field=title&query=Terminator

// http://api-public.guidebox.com/v2/
// movies?api_key=YOUR_API_KEY&
// sources=free

//http://api-public.guidebox.com/v2/
//movies/135934/videos
//?api_key=YOUR_API_KEY&sources=youtube
