var app = angular.module('treeDemo', ['ngRoute', 'jsTree.directive']).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/basic', {
      templateUrl: '../partials/basic.html',
      controller: 'BasicCtrl'
    }).
    when('/plugins', {
      templateUrl: '../partials/plugins.html',
      controller: 'PluginsCtrl'
    }).
    when('/ajax', {
      templateUrl: '../partials/ajax.html',
      controller: 'AjaxCtrl'
    }).
    when('/events', {
      templateUrl: '../partials/events.html',
      controller: 'EventsCtrl'
    }).
    otherwise({
      redirectTo: '/basic'
    });
  }
]);
