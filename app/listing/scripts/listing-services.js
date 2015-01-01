angular.module('listing.services', ['common'])

.factory('Listings', function ($http, $localForage, $rootScope) {
  // this should be changed for search functionality
  // take an input of search variables, retrieve from local storage, attach to $scope.listings
  var getListings = function(){
    var listings = [];
    return $localForage.iterate(function(value, key) {
      // only return the item if it has a valid ListingID
      // add other search criteria here
      if(value.extra.ListingID) {
        listings.push(value);
      }
    }).then(function() {
      // return listings with promise to make sure we have all data
      console.log('listings from promise in factory', listings);
      return listings;
    });
  };
  
  return { 
    getListings: getListings
  };
})
