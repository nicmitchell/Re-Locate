angular.module('listing.services', [])

.factory('Listings', function ($http, FIXTURE_LISTINGS) {
  var getListings = function(){ 
      console.log(FIXTURE_LISTINGS);
    return FIXTURE_LISTINGS;
  };
  return { 
    getListings: getListings
  };
});
