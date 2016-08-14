var approute = angular.module('approute',[]);

approute.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'home.html'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
        });
    $locationProvider.hashPrefix('!');
});