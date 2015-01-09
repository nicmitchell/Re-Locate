angular
  .module('listing')
  .controller('ListingMultipleController', function($scope, Listings, $localForage) {
    $scope.listings = [];
    $scope.getListings = function(){
      // get listings via promise
      Listings.getListings().then(function(data){
        $scope.listings = data;
        console.log('listings in controller', $scope.listings);
      });
    };
    // listen for changes in localForage and refresh $scope.listings
    $scope.$on("LocalForageModule.setItem", function(scope, listing){ 
      console.log('localForage updated', listing.key); 
      $scope.getListings();
    });
  });
