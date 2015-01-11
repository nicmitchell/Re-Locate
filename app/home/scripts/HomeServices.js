angular
  .module('home.services', [])
  .factory('Geocode', function($http){
    var geocode = function(address){
      return $http({
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway+Mountain+View,+CA'
      })
      .then(function(res){
        return { 
          center: { 
            latitude: res.results.geometry.location.lat, 
            longitude: res.results.geometry.location.lng
          }, 
          zoom: 8 
        };
      });
    };
    return {
      geocode: geocode
    };
  })
