angular
  .module('listing')
  .controller('ListingMultipleController', function($scope, Listings, $localForage) {
    $scope.listings = {};
    $scope.getListings = function(){
      Listings.getListings().then(function(data){
        $scope.listings = data;
        console.log('listings in controller', $scope.listings);
      });
    };
    $scope.getListings();
  });
