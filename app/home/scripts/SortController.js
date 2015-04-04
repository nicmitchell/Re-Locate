angular
  .module('home')
  .controller("SortController", function ($scope, supersonic, Search, Sort) {

    // Load the sort parameters from local storage
    $scope.sort = Sort.get();
    $scope.query = Search.get();
    $scope.error = false;

    // Hide the sort modal view and publish sort params
    // $scope.closeSort = function(){
    //   supersonic.data.channel('sort').publish($scope.sort);
    //   supersonic.ui.modal.hide().then( function() {});
    //   };
  // })

  $scope.closeSort = function(){
    $scope.error = false;
    Search.fetch($scope.query, $scope.sort, 0, function(data){
      if(data.error){
        $scope.$apply(function(){
          $scope.error = data.error;
        });
      }
      if(!data.error){
        $scope.homes = data.homes;
        supersonic.data.channel('sort').publish(data);
        Sort.set($scope.sort);
        supersonic.ui.modal.hide();  
      }
    });
  };

  $scope.cancelSort = function(){
    $scope.error = false;
    supersonic.ui.modal.hide();
  };
  
  $scope.errorTest = function(){
    $scope.error = "Oops, something went wrong. Please try again";
  };
})
