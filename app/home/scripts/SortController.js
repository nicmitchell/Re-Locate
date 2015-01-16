angular
  .module('home')
  .controller("SortController", function ($scope, supersonic, sort) {

    // Set initial search params (required)
    // $scope.q = query;
    // $scope.sort = {};
    $scope.sort = sort;
    // initialize the variable in local scope
    // $scope.sort = null;

    // bind it to superscope
    // supersonic.bind($scope, "sort");

    // Receive query params from the index view
    // supersonic.data.channel('sortSend')
    //   .subscribe( function(s) {
    //       $scope.sort = s;
    //     $scope.$apply(function () {
    //       console.log($scope.sort);
    //     });
    //   });

    // Hide the search modal view and share current search params
    $scope.closeSort = function(){
      supersonic.data.channel('sort').publish($scope.sort);
      supersonic.ui.modal.hide().then( function() {
      });
    };

  })
