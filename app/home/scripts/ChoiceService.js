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

    // Returns an array of each item key (mls) set in Local Storage for either true (fave) or false (trash)
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
  // Filters Fave / Trash
  .filter('homeFilter', function(){
    return function(items, q) {
      // Make sure there is something valid to filter
      if (!items || !q || typeof items === 'function') {
        return;
      }
      return items.filter(function(item){
        return ((q.group && q.group.length > 0) ? _.contains(q.group, item.ml) : true); //favs/unfavs (by MLS numbers)
      });
    };
  })
