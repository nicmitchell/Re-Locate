angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, query) {

    // Set initial search params (required)
    $scope.q = query;

    // Receive query params from the search view
    supersonic.data.channel('query')
      .subscribe( function(q) {
        $scope.$apply(function () {
          $scope.q = q;
        });
      });

    // Hide the search modal view and share current search params
    $scope.closeSearch = function(){
      supersonic.data.channel('query').publish($scope.q);
      supersonic.ui.modal.hide().then( function() {
      });
    };

  })
