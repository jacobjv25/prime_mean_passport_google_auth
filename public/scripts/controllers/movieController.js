app.controller("MovieController", function(MovieService){
    console.log("movieController loaded");

    var ctrl = this;
    ctrl.searchReturn = '';
    ctrl.tvSearchReturn = '';
    ctrl.movieTitle = null;
    ctrl.searchId = MovieService.search;

    ctrl.searchMovies = function(search) {
      MovieService.searchMovieDatabase(search).then(function(response){
        // console.log(response);
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

    ctrl.searchBoth = function (search) {
      if (search === null){
        console.log("nothing to show");
      } else {
        ctrl.searchMovies(search);
        // ctrl.searchTv(search);
      }
    };

    ctrl.reloadSearchResults = function(search) {
      ctrl.searchBoth(search);
    }

    ctrl.reloadSearchResults(ctrl.searchId);

    ctrl.storeTitleId = function(id){
      MovieService.storeMovieId(id);
    };

    ctrl.storeTvId = function(id){
      MovieService.storeShowId(id);
    }

    // ctrl.showDetails = function() {
    //   ctrl.movieTitle = MovieService.details;
    //   console.log(ctrl.movieTitle);
    // };
    //
    // ctrl.showDetails();

  });//end of movieController
