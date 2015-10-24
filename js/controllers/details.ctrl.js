angular.module('Appl')

.controller('DetailsCtrl', function($scope, $routeParams, Items){
    
    $scope.itemId = $routeParams.itemID;
    
    $scope.item = {}
   
    Items.getOne($scope.itemId)
   
    .then(function(response){
        //success
        var items = response.data.items;
        
        items.forEach(function(i){
        
            if (i.id == $routeParams.itemID){
            
                $scope.item = i;
            }
        
        });
        
        
    }, function(response){
        //error
        
    });
    
});