app.controller("DetailController", function(MovieService, AuthService){
    console.log("DetailController loaded");

    var detail = this;
    detail.movieDeets = null;
    detail.freeWebSources = [];
    detail.purchaseWebSources = [];
    detail.subscriptionWebSources = [];
    detail.tvAnywhereWebSources = [];
    detail.movieTrailers = [];

    detail.showDetails = function() {
      if (MovieService.movieId != null ) {
        var movieId = MovieService.movieId;
        console.log("searching for movie info", movieId);
        MovieService.searchMovieDetails(movieId).then(function(response){
          console.log(response);
          detail.movieDeets = response.data;
          detail.freeWebSources = response.data.free_web_sources;
          detail.purchaseWebSources = response.data.purchase_web_sources;
          detail.subscriptionWebSources = response.data.subscription_web_sources;
          detail.tvAnywhereWebSources = response.data.tv_everywhere_web_sources;
          detail.movieTrailers = response.data.trailers.web;

          if (detail.freeWebSources === []) {
            detail.freeWebSources = false;
          }
          if (detail.purchaseWebSources === []) {
            detail.purchaseWebSources = false;
          }
          if (detail.subscriptionWebSources === []) {
            detail.subscriptionWebSources = false;
          }
          if (detail.tvAnywhereWebSources === []){
            detail.tvAnywhereWebSources = false;
          }
          if (detail.movieTrailers === []){
            detail.movieTrailers = false;
          }
          console.log(detail.freeWebSources);
          console.log(detail.purchaseWebSources);
          console.log(detail.subscriptionWebSources);
          console.log(detail.tvAnywhereWebSources);
          console.log(detail.movieTrailers);

        }) //end of show movie
      } else {
        var showId = MovieService.showId;
        console.log("searching for movie info", showId);
        MovieService.searchTvDetails(showId).then(function(response){
          console.log(response.data);
      })
    }//end of else show TV

    };// end of showDetails

    detail.addToWatchlist = function(info){
      swal('Added to queue!');
      console.log("Adding", info.title, " to queue");
      AuthService.addWatchList(info);
    };//end of addToWatchlist

    detail.showDetails();
  });//end of DetailController
