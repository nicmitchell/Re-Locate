angular
  .module('listing')
  .controller('ListingMultipleController', function($scope, Listings, $localForage) {
    $scope.currentPage = 1;
    $scope.listings = [];
    $scope.getListings = function(){
      // get listings via promise
      Listings.getListings().then(function(data){
        $scope.listings = data;
      });
    };
    // listen for changes in localForage and refresh $scope.listings
    $scope.$on("LocalForageModule.setItem", function(scope, listing){ 
      $scope.getListings();
    });
  });
