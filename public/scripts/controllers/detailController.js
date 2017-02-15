app.controller("DetailController", function(MovieService){
    console.log("DetailController loaded");

    var detail = this;
    detail.movieDeets = null;
    detail.freeWebSources = false;
    detail.purchaseWebSources = false;
    detail.subscriptionWebSources = false;
    detail.tvAnywhereWebSources = false;
    detail.movieTrailers = [];

    detail.showDetails = function() {
      var movieId = MovieService.movieId;
      MovieService.searchMovieDetails(movieId).then(function(response){
        console.log(response);
        detail.movieDeets = response.data;
        detail.freeWebSources = response.data.free_web_sources;
        detail.purchaseWebSources = response.data.purchase_web_sources;
        detail.subscriptionWebSources = response.data.subscription_web_sources;
        detail.tvAnywhereWebSources = response.data.tv_everywhere_web_sources;
        detail.movieTrailers = response.data.trailers.web;
      })
    };

    detail.showDetails();
  });//end of DetailController
