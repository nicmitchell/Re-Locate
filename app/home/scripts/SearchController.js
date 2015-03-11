angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search, Home) {

    // Load the query parameters from local storage
    $scope.q = Search.get();

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      var query = {'bd': 4};
      // var query = { "brewery": "Schlenkerla" };

      Home.findAll({query: JSON.stringify(query)}).then(function(homes) {
        supersonic.data.channel('query').publish($scope.q, homes);
        supersonic.ui.modal.hide().then( function() {});
      });
    };
  })
