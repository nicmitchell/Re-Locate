angular
  .module('home')
  .controller("SortController", function ($scope, supersonic, Search) {

    // Load the sort parameters from local storage
    $scope.sort = Sort.get();

    // Hide the sort modal view and publish sort params
    $scope.closeSort = function(){
      supersonic.data.channel('sort').publish($scope.sort);
      supersonic.ui.modal.hide().then( function() {
      });
    };
  })
