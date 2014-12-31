angular.module('listing', ['common', 'listing.services'])
.config(['$localForageProvider', function($localForageProvider, $http){
  $localForageProvider.config({
    storeName: 'listings' // name of the table
  });
}])
.run(function($http, $localForage){
  return $http({
    method: 'GET',
    url: '/listing-samples.js'
  })
  .then(function(res){
    console.log('response data', res.data);
    console.log('response data length', res.data.length);
    for(var i = 0, l = res.data.length; i < l; i ++){
      $localForage.setItem(res.data[i].ListingID, res.data[i]);
    }
    return res.data;
  });
})
