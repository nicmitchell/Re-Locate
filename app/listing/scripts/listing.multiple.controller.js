angular
  .module('listing.multiple')
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
    };
    $scope.getListings();
  });
