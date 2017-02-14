var app = angular.module('movieApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {

  $routeProvider
    .when('/profile', {
      templateUrl: '/public/views/templates/profile.html',
      controller: 'ProfileController',
      controllerAs: 'profile',
    })
    .when('/login', {
      templateUrl: '/public/views/templates/main.html',
      controller: 'MovieController',
      controllerAs: 'movie',
    })
    .when('/details', {
      templateUrl: '/public/views/templates/details.html',
      controller: 'movieController as ctrl'
    })
    .otherwise({
      redirectTo: 'login',
    });
},
]);
