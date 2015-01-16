angular
  .module('home')
  .controller("SortController", function ($scope, supersonic, sort) {

    // Set initial sort params
    $scope.sort = sort;

    // Hide the sort modal view and share current sort params
    $scope.closeSort = function(){
      supersonic.data.channel('sort').publish($scope.sort);
      supersonic.ui.modal.hide().then( function() {
      });
    };

  })
