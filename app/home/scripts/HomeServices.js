angular
  .module('home.services', [])
  .factory('Geocode', function($http){
    // takes a street address and return lat and log for Google Maps
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
          map: { center: { latitude: lat, longitude: lng }, zoom: 16 },
          marker: { id: 0, coords: { latitude: lat, longitude: lng } }
        };
      });
    };
    return {
      geocode: geocode
    };
  })

  // To share search params across views using local storage
  .factory('Search', function(query){
    var set = function(q){
      return localStorage.setItem('query', JSON.stringify(q));
    };
    var get = function(){
      return JSON.parse(localStorage.getItem('query'));
    };
    return {
      set: set,
      get: get
    };
  })
  
  // To share sort params across views using local storage
  .factory('Sort', function(sort){
    var set = function(s){
      return localStorage.setItem('sort', JSON.stringify(s));
    };
    var get = function(){
      return JSON.parse(localStorage.getItem('sort')) || sort;
    };
    return {
      set: set,
      get: get
    };
  })

  // Filters home results based on search params
  .filter('homeFilter', function(){
    return function(items, q) {

      // Make sure there is something to filter
      if (items === null || q === undefined) {
        return;
      }

      return items.filter(function(item){
        return (
          item.bd >= q.bd && // bedrooms
          item.ba >= q.ba && // bathrooms
          item.pr >= q.pr.min && item.pr <= q.pr.max && // price range
          item.yr >= q.yr && // year
          item.ft >= q.ft && // sq feet
          _.contains(item.ad, q.ad) && // address
          ((q.group && q.group.length > 0) ? _.contains(q.group, item.id) : true) //favs/unfavs (by MLS numbers)
        );
      });
    };
  })

