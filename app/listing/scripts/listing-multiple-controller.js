angular
  .module('listing', ['supersonic', 'listing.services'])
  .controller('ListingMultipleController', function($scope, supersonic, Listings) {
    // model
    $scope.listings = {};

    // load listings via $http
    // $scope.getListings = function(){
    //   Listings.getListings().then(function(data){
    //     $scope.listings = data;
    //   });
    // };
    $scope.getListings = function(){
      $scope.listings = Listings.getListings();
      console.log('get listings called');
    };
    $scope.getListings();
  });
