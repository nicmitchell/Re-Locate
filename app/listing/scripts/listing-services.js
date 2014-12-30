angular.module('listing.services', [])

.factory('Listings', function ($http, FIXTURE_LISTINGS) {
  var getListings = function(){ 
    return FIXTURE_LISTINGS;
  };
  return { 
    getListings: getListings
  };
});
