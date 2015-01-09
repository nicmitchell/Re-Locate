angular.module('listing', ['common', 'listing.services', 'angularUtils.directives.dirPagination'])
.config(['$localForageProvider', function($localForageProvider, $http){
  $localForageProvider.config({
    storeName: 'listings' // name of the table
  });
}])
// load sample data into localForage via ajax 
.run(function($http, $localForage){
  return $http({
    method: 'GET',
    // url: 'http://black-paper-ant.herokuapp.com/api/v1/listings'
    url: '/sample-listings.json'
  })
  .then(function(res){
    console.log('listing ID in .run', res.data);
    for(var i = 0, l = res.data.length; i < l; i ++){
      $localForage.setItem(res.data[i].extra.ListingID, res.data[i]);
    }
    return res.data;
  });
})
