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
      sweetAlert("Done!", "Added to queue!", "success");
      console.log("Adding", info.title, " to queue");
      AuthService.addWatchList(info);
    };//end of addToWatchlist

    // detail.addToRelated = function(title){
    //   AuthService.addRelated(title);
    // };

    detail.addToFavorites = function(info){
      sweetAlert("Done!", "Added to favorites!", "success");
      console.log("Adding", info.title, " to favorites");
      AuthService.addFavorite(info);
      MovieService.getRelatedTitles(info).then(function(response){
        response.forEach(function(element){
            AuthService.addRelated(element);
        });
      });
        // response.forEach(addToRelated(title));
    };//end of addToFavorites

    detail.showDetails();
  });//end of DetailController
