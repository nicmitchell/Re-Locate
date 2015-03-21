angular
  .module('home.services', [])
  .factory('Geocode', function($http){
    // takes a street address and return lat and log for Google Maps
    var geocode = function(address){
      address = encodeURIComponent(address.replace(/ /g, '+'));
      return $http({
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address
      })
      .then(function(res){
        if(res.data.results){
          var lat = res.data.results[0].geometry.location.lat;
          var lng = res.data.results[0].geometry.location.lng;
          return { 
            map: { center: { latitude: lat, longitude: lng }, zoom: 16 },
            marker: { id: 0, coords: { latitude: lat, longitude: lng } }
          };
        } else {
          console.log('Geocoding: no results found');
        }
      }, function(error){
        console.log('Geocoding: an error has occurred:', error);
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
      return query;//JSON.parse(localStorage.getItem('query')) || query;
    };
    var fetch = function(q, callback){
      var model = Parse.Object.extend("home");
      var query = new Parse.Query(model);
      var data = { error: false, homes: [] };

      query.greaterThan('bd', q.bd);
      query.greaterThan('ba', q.ba);
      query.greaterThan('yr', q.yr);
      query.greaterThan('ft', q.ft);
      query.greaterThan('pr', q.pr.min);
      query.lessThan('pr', q.pr.max);
      query.limit(10);
      if(q.ad){
        query.startsWith('ad', q.ad);
      }
      query.find({
        success: function(results) {

          // check for results
          if (!results.length){
            data.error = 'Sorry, no results were found. Please update your search and try again.';
            // return data;
          }
            
          // var q 
          var homes = [];
          for (var i = 0; i < results.length; i++) { 
            var home = results[i].attributes;
            if(home.ad && home.ml){
              data.homes.push(home);
              // console.log('home', home);
            }
          }
          console.log('data in service', data);
          // data = JSON.parse(data);
          callback(data);
          // $scope.homes = homes;
          // var query = { homes: homes };
          // supersonic.data.channel('query').publish(query);
          // supersonic.ui.modal.hide();  
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
          data.error = "Oops, something went wrong. Please try again";
          callback(data);
        }
      });
    };
    return {
      set: set,
      get: get,
      fetch: fetch
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
      console.log('filter items',items);

      // Make sure there is something to filter
      if (items === null || typeof items === 'function' || q === undefined) {
        return;
      }

      return items.filter(function(item){
        return (
          item.bd >= q.bd && // bedrooms
          item.ba >= q.ba && // bathrooms
          ((q.pr.max === q.pr.limit) ? item.pr >= q.pr.min : 
          item.pr >= q.pr.min && item.pr <= q.pr.max) && // price range
          item.yr >= q.yr && // year
          item.ft >= q.ft && // sq feet
          _.contains(item.ad, q.ad) && // address
          ((q.group && q.group.length > 0) ? _.contains(q.group, item.id) : true) //favs/unfavs (by MLS numbers)
        );
      });
    };
  })

