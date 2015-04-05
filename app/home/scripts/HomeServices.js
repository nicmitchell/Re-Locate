angular
  .module('home')
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
      return JSON.parse(localStorage.getItem('query')) || query;
    };
    var fetch = function(q, sort, page, callback){
      var model = Parse.Object.extend("home");
      var query = new Parse.Query(model);
      var data = { error: false, homes: [], count: 0 };
      // converts address to Title Case
      // TODO: add lower case column of address to Parse
      var titleCase = function toTitleCase(address){
        if(typeof address !== 'number'){
          return address.replace(/([^\W_]+[^\s-]*) */g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        }
      };

      query.greaterThan('bd', q.bd);
      query.greaterThan('ba', q.ba);
      query.greaterThan('yr', q.yr);
      query.greaterThan('ft', q.ft);
      query.greaterThan('pr', q.pr.min);
      query.lessThan('pr', q.pr.max);
      query[sort.order](sort.property);
      if(q.ad){
        // format to match address title case field in Parse
        var address = titleCase(q.ad);
        query.contains('ad', address);
      }
      query.count({
        success: function(count) {
          data.count = count;
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
          data.error = "Oops, something went wrong. Please try again";
        }
      });
      query.limit(10);
      if (page > 1) { 
        query.skip((page - 1) * 10);
      }
      query.find({
        success: function(results) {
          // Make sure there are results
          if (!results.length){
            data.error = 'Sorry, no results were found. Please update your search and try again.';
          }
          var homes = [];
          for (var i = 0; i < results.length; i++) { 
            var home = results[i].attributes;
            home.id = results[i].id;
            if(home.ad && home.ml){
              data.homes.push(home);
              // console.log('home', home);
            }
          }
          callback(data);
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
          data.error = "Oops, something went wrong. Please try again";
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

