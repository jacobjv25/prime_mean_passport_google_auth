angular.module('movieApp').service("MovieService", function($http){

  var API = "http://api-public.guidebox.com/v2/";
  var apiKey = "?api_key=43a48755edd6c58e4272608642c1120e2a96f99a";

  this.details = null;

  this.searchDatabase = function(search){
    console.log('searching for', search);
    return $http({
      method: 'GET',
      url: API + "search" + apiKey + "&type=movie&field=title&query=" + search
    }).then(function(response){
      console.log("Got a response from the API", response);
      return response;
    })
  }//end of searchDatabase

  this.searchDetails = function(search){
    console.log('searching for', search);
    return $http({
      method: 'GET',
      url: API + 'movies/' + search.id + apiKey
    }).then(function(response){
      console.log("Detailed search response from the API", response);
      this.details = response.data.results[0].description;
      console.log(this.details);
      // return response
    });
  };//end of searchDetails

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
