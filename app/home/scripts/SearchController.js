angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search) {
    // Load the query parameters from local storage
    $scope.query = Search.get();
    $scope.homes = [];
    $scope.error = false;

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      $scope.error = false;
      Search.fetch($scope.query, 0, function(data){
        if(data.error){
          $scope.$apply(function(){
            $scope.error = data.error;
          });
        }
        if(!data.error){
          $scope.homes = data.homes;
          // var query = { homes: homes };
          supersonic.data.channel('query').publish(data);
          Search.set($scope.query);
          supersonic.ui.modal.hide();  
        }
      });
    };

    $scope.cancelSearch = function(){
      // var query = { homes: $scope.homes };
      // supersonic.data.channel('query').publish(query);
      $scope.error = false;
      supersonic.ui.modal.hide();
    };
    
    $scope.errorTest = function(){
      $scope.error = "Oops, something went wrong. Please try again";
    };
  })
