angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search, Sort) {
    // Load the query parameters from local storage
    $scope.query = Search.get();
    $scope.sort = Sort.get();
    $scope.homes = []; // not necessary, but useful for debugging
    $scope.error = false;

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      $scope.error = false;
      Search.fetch($scope.query, $scope.sort, 0, function(data){
        if(data.error){
          $scope.$apply(function(){
            $scope.error = data.error;
          });
        }
        if(!data.error){
          $scope.homes = data.homes;
          supersonic.data.channel('query').publish(data);
          Search.set($scope.query);
          supersonic.ui.modal.hide();  
        }
      });
    };

    $scope.cancelSearch = function(){
      $scope.error = false;
      supersonic.data.channel('query').publish('cancel');
      supersonic.ui.modal.hide();
    };
    
    $scope.errorTest = function(){
      $scope.error = "Oops, something went wrong. Please try again";
    };
  })
