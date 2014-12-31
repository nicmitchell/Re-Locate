angular.module('listing.services', ['common'])

.factory('Listings', function ($http, $localForage) {
  var getListings = function(){ 
    // $http().then(response data)
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
      // $localForage.setItem('myName','Olivier Combe').then(function() {
      //   $localForage.getItem('myName').then(function(data) {
      //     var myName = data;
      //   });
      // });
      return res.data;
    });
  };
  return { 
    getListings: getListings
  };
});
