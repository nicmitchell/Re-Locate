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

    return {
      geocode: geocode
    };
  })
  .factory('Search', function(){
    var query = function(q){
      return q;
    };
    return {
      query: query
    };
  })
  .filter('homeFilter', function(){
    return function(items, q) {

      // Make sure there is something to filter
      if (items === null || q === undefined) {
        return;
      }

      return items.filter(function(item){
        return (
          item.bd >= q.bd.from && item.bd <= q.bd.to && // bedrooms
          item.ba >= q.ba.from && item.ba <= q.ba.to && // bathrooms
          item.pr >= q.pr.from && item.pr <= q.pr.to && // price
          item.yr >= q.yr.from && item.yr <= q.yr.to && // year
          item.ft >= q.ft.from && item.ft <= q.ft.to && // sq feet
          _.contains(item.ad, q.ad) && // address
          ((q.group.length > 0) ? _.contains(q.group, item.id) : true) //favs/unfavs (by MLS numbers)
        );
      });
    };
  })
