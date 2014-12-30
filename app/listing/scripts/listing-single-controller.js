angular
  .module('listing')
  .controller('ListingSingleController', function($scope, supersonic, Listings, FIXTURE_LISTINGS) {

    $scope.listing = null;
    $scope.showSpinner = true;
    $scope.dataId = void 0;

    // Update the view
    $scope._refreshViewData = function() {
      // find the listing that was clicked
      for(var i = 0; i < FIXTURE_LISTINGS.length; i++){
        if (FIXTURE_LISTINGS[i].ListingID === $scope.dataId){
          $scope.listing = FIXTURE_LISTINGS[i];
          $scope.showSpinner = false;
          return;
        }
      }
    };

    // update the view when params are set
    supersonic.ui.views.current.params.onValue(function(values) {
      $scope.dataId = values.id;
      $scope._refreshViewData();
    }); 
  });
