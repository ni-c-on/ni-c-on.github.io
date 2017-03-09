var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      title: 'resume.php',
      lang: 'php',
      templateUrl: '/views/index.html'
    })
    .when('/photo', {
      title: 'photo.txt',
      templateUrl: '/views/photo.html'
    })
    .when('/projects', {
      title: 'projects.md',
      templateUrl: '/views/projects.html'
    })
    .when('/404', {
      title: '404.html',
      lang: 'html',
      templateUrl: '/views/404.html'
    })
    .otherwise({
      redirectTo: '/404'
    })
});

app.controller('menuCtrl', function ($scope, $location, $route) {
  $scope.isActive = function (url) {
    return url == $location.url();
  }
});

app.run(function($rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.title;
        $rootScope.lang = current.lang;

    });
});