var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/profile', {
      templateUrl: '/public/views/templates/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
    })
    .when('/main', {
      templateUrl: '/public/views/templates/main.html',
      controller: 'MovieController',
      controllerAs: 'movie',
    })
    .when('/details', {
      templateUrl: '/public/views/templates/details.html',
      controller: 'DetailController',
      controllerAs: 'detail',
    })
    .otherwise({
      redirectTo: 'main',
    });
},
]);
