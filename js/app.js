var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/views/index.html'
    })
    .when('/photo', {
      templateUrl: '/views/photo.html'
    })
});