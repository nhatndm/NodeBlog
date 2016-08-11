var app = angular.module('main',['ui.bootstrap']);

app.controller('homecontroler',function($scope,$http){

    $scope.alert = function(){

        alert("Welcome To My Blog");

    };
});