angular.module('listing.services', ['common'])

.factory('Listings', function ($http, $localForage) {
  // this should be changed for search functionality
  // take an input of search variables, retrieve from local storage, attach to $scope.listings
  var getListings = function(){ 
    // $http().then(response data)
    // return $http({
    //   method: 'GET',
    //   url: '/listing-samples.js'
    // })
    // .then(function(res){
    //   console.log('response data', res.data);
    //   console.log('response data length', res.data.length);
    //   for(var i = 0, l = res.data.length; i < l; i ++){
    //     $localForage.setItem(res.data[i].ListingID, res.data[i]);
    //   }
    //   // $localForage.setItem('myName','Olivier Combe').then(function() {
    //   //   $localForage.getItem('myName').then(function(data) {
    //   //     var myName = data;
    //   //   });
    //   // });
    //   return res.data;
    // });
  };
  return { 
    getListings: getListings
  };
});
