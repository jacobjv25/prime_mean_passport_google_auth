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

          if (detail.freeWebSources.length == 0) {
            detail.freeWebSources = false;
          }
          if (detail.purchaseWebSources.length == 0) {
            detail.purchaseWebSources = false;
          }
          if (detail.subscriptionWebSources.length == 0) {
            detail.subscriptionWebSources = false;
          }
          if (detail.tvAnywhereWebSources.length == 0){
            detail.tvAnywhereWebSources = false;
          }
          if (detail.movieTrailers.length == 0){
            detail.movieTrailers = false;
          }
          console.log("free web sources", detail.freeWebSources);
          console.log("purchase", detail.purchaseWebSources);
          console.log("subscription", detail.subscriptionWebSources);
          console.log("tv anywhere", detail.tvAnywhereWebSources);
          console.log("trailers", detail.movieTrailers);

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
