angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search) {

    // Load the query parameters from local storage
    $scope.q = Search.get();

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      supersonic.data.channel('query').publish($scope.q);
      supersonic.ui.modal.hide().then( function() {
      });
    };
  })
