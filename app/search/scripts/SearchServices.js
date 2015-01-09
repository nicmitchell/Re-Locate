angular.module('search.services', ['common'])

.factory('Listings', function ($localForage, $rootScope) {
  var searchListings = function(beds){
    var listings = [];
    return $localForage.iterate(function(value, key){
      if(beds === value.beds) {
        listings.push(value);
      }
    }).then(function(data){
      console.log(listings);
      return listings;
    });
  };
})
