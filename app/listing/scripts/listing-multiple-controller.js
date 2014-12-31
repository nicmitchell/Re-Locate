angular
  .module('listing')
  .controller('ListingMultipleController', function($scope, Listings, $localForage) {
    $scope.listings = {};
    $scope.getListings = function(){
      $scope.listings = Listings.getListings();
      steroids.logger.log("get listings called");
    };
    $scope.getListings();
  });
