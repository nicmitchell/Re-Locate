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
        var lat = res.data.results[0].geometry.location.lat;
        var lng = res.data.results[0].geometry.location.lng;
        return { 
          map: { 
            center: { 
              latitude: lat, 
              longitude: lng
            }, 
            zoom: 16
          },
          marker: {
            id: 0,
            coords: {
              latitude: lat,
              longitude: lng
            }
          }
        };
      });
    };
    
    var searchResults = function(q){
      return q;
    };

    return {
      geocode: geocode
    };
  })
