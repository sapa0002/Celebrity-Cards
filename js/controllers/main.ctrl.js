angular.module('Appl')

.controller('MainCtrl', function($scope, $http, Items) {
    //fetch all the data from the JSON file and display it
    $scope.allData;
    
    $scope.random = function (){
        
                return 0.5-Math.random();
        };
    
    Items.getAll()
    .then(function(response){
        //success
        $scope.allData = response.data;
        
        
        
    }, function(response){
        //error
        
    });
});