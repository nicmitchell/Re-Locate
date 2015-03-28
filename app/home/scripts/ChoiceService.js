angular.module('home')
  .factory('Choice', function(){
    var get = function() {
      // fetch or initialize
      return JSON.parse(localStorage.getItem('choices')) || {};
    };

    var set = function(mls, bool) {
      var choices = get();
      choices[mls] = bool;
      return localStorage.setItem('choices', JSON.stringify(choices));
    };

    var group = function(bool) {
      var results = [];
      _.each(get(), function(value, key, collection) {
        if (value === bool) {
          results.push(key);
        }
      });
      return results;
    };

    return { 
      get: get,
      set: set,
      group: group
    };
  })
