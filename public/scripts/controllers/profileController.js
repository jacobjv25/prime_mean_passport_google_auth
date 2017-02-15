app.controller('ProfileController', function ($http) {
  console.log('loaded ProfileController');
  var _this = this;
  _this.data = '';
  _this.show = false;
  _this.user = '';

  _this.getFavorites = function(){
    return $http({
      type: 'GET',
      url: '/favorites'
    }).then(function(err){
      console.log("got a GET response from the DB", response);
          return response;
        }).catch(function(err){
          console.log("error getting info from DB", err);
        });
    }//end of searchFavorites

  $http.get('/private/profile')
    .then(function (response) {
      if (response.data.err) {
        _this.data = 'Sorry, you are not logged in!';
      } else {
        _this.data = response.data.message;
        _this.user = response.data.user;
        _this.show = true;
      }
    });
});
