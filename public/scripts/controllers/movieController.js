app.controller("MovieController", function(MovieService){
    console.log("movieController loaded");

    var ctrl = this;
    ctrl.searchReturn = '';
    ctrl.details = MovieService.details;

    ctrl.searchMovies = function(search) {
      MovieService.searchDatabase(search).then(function(response){
      //   console.log(response);
      ctrl.searchReturn = response.data.results;
      console.log(ctrl.searchReturn);
      })
    };//end of searchMovies

    ctrl.detailSearch = function(movie) {
      console.log("Button clicked, searching for details");
      MovieService.searchDetails(movie);

      // .then(function(response){
      //   console.log(response);
      //   ctrl.details = response.data.results[0].description;
      //   console.log("details", ctrl.details);
      // })
    }//end of detailSearch

  });//end of movieController
