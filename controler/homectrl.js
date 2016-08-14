var homectrl = angular.module('homectrl',[])

homectrl.controller('homecontroler',function($scope,$http){

    $scope.alert = function(){

        alert("Welcome To My Blog");

    };

    var load = function(){
        $http.get('/contactlist').success(function(response){
            $scope.contacts = response;
        });
    };

    load();
});