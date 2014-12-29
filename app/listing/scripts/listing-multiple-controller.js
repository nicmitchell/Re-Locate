angular
  .module('listing', ['supersonic', 'listing.services'])
  .controller('ListingMultipleController', function($scope, supersonic, Listings) {
    // model
    $scope.listings = {};
    $scope.getListings = function(){
      $scope.listings = Listings.getListings();
      console.log('get listings called');
    };
    $scope.getListings();
  });
