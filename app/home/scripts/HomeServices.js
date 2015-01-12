angular
  .module('home.services', [])
  .factory('Geocode', function($http){
    var geocode = function(address){
      address = address.replace(/ /g, '+');
      return $http({
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address
      })
      .then(function(res){
        return { 
          center: { 
            latitude: res.data.results[0].geometry.location.lat, 
            longitude: res.data.results[0].geometry.location.lng
          }, 
          zoom: 16
        };
      });
    };
    return {
      geocode: geocode
    };
  })
