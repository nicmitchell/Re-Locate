angular.module('user')
  .factory('User', function(){
    var getCurrent = function() {
      // fetch currentUser or set to empty object
      return JSON.parse(localStorage.getItem('currentUser')) || {};
    };

    var setCurrent = function(user) {
      return localStorage.setItem('currentUser', JSON.stringify(user));
    };

    return { 
      getCurrent: getCurrent,
      setCurrent: setCurrent
    };
  })
