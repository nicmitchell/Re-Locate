angular
  .module('listing')
  .controller('ListingSingleController', function($scope, supersonic, Listings, $localForage) {

    $scope.listing = null;
    $scope.showSpinner = true;
    $scope.dataId = void 0;

    // Update the view
    $scope._refreshViewData = function() {
      // find the listing that was clicked
      $localForage.getItem($scope.dataId).then(function(data){
        $scope.listing = data;
        return;
      });
    };

    // update the view when params are set
    supersonic.ui.views.current.params.onValue(function(values) {
      $scope.dataId = values.id;
      $scope._refreshViewData();
    }); 
  });
