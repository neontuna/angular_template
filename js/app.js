var myapp = angular.module('myapp', ['ui.router', 'ui.bootstrap'])

.config( function($stateProvider, $urlRouterProvider ){

  $stateProvider
    .state('home', {
      url: '/home/:id',
      templateUrl: 'js/templates/home.html',
      controller: 'HomeCtrl',
    });

  $urlRouterProvider.otherwise('/home');

});