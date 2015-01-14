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

    return { 
      get: get,
      set: set
    };
  })
