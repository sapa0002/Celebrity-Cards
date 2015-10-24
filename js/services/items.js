angular.module('Appl')
    
    .factory('Items', function ItemsFactory($http){

            return{
                
                getAll: function(){
                    return $http({method: 'GET', url: 'data/celebrities.json'});
            
                 },
                
                getOne: function(id){
                    return $http({method: 'GET', url: 'data/celebrities.json'});
                }
            }

});