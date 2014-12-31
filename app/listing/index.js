angular.module('listing', ['common', 'listing.services'])
.config(['$localForageProvider', function($localForageProvider){
  $localForageProvider.config({
    storeName   : 'listings' // name of the table
  });
}]);
