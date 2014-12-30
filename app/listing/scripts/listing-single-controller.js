angular
  .module('listing')
  .controller('ListingSingleController', function($scope, supersonic, Listings) {

    $scope.listing = null;
    $scope.test = 'test';
    $scope.showSpinner = true;
    $scope.dataId = void 0;
    _refreshViewData = function() {
      steroids.logger.log('_refreshViewData called', $scope.test);
      return Listings.find($scope.dataId).then(function(listing) {
        return $scope.$apply(function() {
          $scope.listing = listing;
          $scope.showSpinner = false;
          steroids.logger.log('listing', listing);
        });
      });
    };
    supersonic.ui.views.current.whenVisible(function() {
      if ($scope.dataId) {
        return _refreshViewData();
      }
    });
    supersonic.ui.views.current.params.onValue(function(values) {
      steroids.logger.log('on values', values);
      $scope.dataId = values.id;
      steroids.logger.log('$scope.dataID', $scope.dataId);
      _refreshViewData();
    }); 
    // _refreshViewData();
    // steroids.logger.log('listing at controller load', $scope.listing);
  });
