app.controller("MovieController", function(MovieService){
    console.log("movieController loaded");

    var ctrl = this;
    ctrl.searchReturn = '';
    ctrl.tvSearchReturn = '';
    ctrl.movieTitle = null;

    ctrl.searchMovies = function(search) {
      MovieService.searchMovieDatabase(search).then(function(response){
      //   console.log(response);
      ctrl.searchReturn = response.data.results;
      console.log(ctrl.searchReturn);
      })
    };//end of searchMovies

    ctrl.searchTv = function(search) {
      MovieService.searchTvDatabase(search).then(function(response){
        ctrl.tvSearchReturn = response.data.results;
        console.log(ctrl.tvSearchReturn);
      })
    }

    ctrl.storeId = function(id){
      MovieService.storeMovieId(id);
    };

    // ctrl.showDetails = function() {
    //   ctrl.movieTitle = MovieService.details;
    //   console.log(ctrl.movieTitle);
    // };
    //
    // ctrl.showDetails();

  });//end of movieController
