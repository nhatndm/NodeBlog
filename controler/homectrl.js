var app = angular.module('main',[]);

app.controller('homecontroler',function($scope,$http){

    $scope.alert = function(){

        alert("Welcome To My Blog");

    };
});