angular
  .module('home')
  .controller("IndexController", function ($scope, Home, Choice, supersonic, query, sort) {
    $scope.homes = null;
    $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.q = query; // set query based on defaults in QueryValues.js

    // Infinite scroll for home#index
    $scope.scrollLimit = 10;
    $scope.scrollLoad = function(){
      $scope.scrollLimit += 10;
    };
    
    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      return $scope.choice = ($scope.choice === bool) ? null : bool;
    };

    $scope.groupFilter = function(bool) {
      $scope.q.group = $scope.setChoice(bool) === null ? [] : Choice.group(bool);
    };

    // Open the search modal view and share current search params
    $scope.openSearch = function(){
      supersonic.data.channel('query').publish($scope.q);
      supersonic.ui.modal.show("home#search").then( function() {
      });
    };

    // Open the sort modal view and share current sort params
    $scope.openSort = function(){
      supersonic.data.channel('sort').publish($scope.sort);
      supersonic.ui.modal.show("home#sort").then( function() {
      });
    };

    // Receive query params from the search view
    supersonic.data.channel('query')
      .subscribe( function(q) {
        $scope.$apply(function () {
          $scope.q = q;
        });
      });

    // Receive sort params from the sort view
    supersonic.data.channel('sort')
      .subscribe( function(s) {
        $scope.$apply(function () {
          $scope.sort = s;
        });
      });

    // show the page when $scope.homes is loaded from the model
    Home.all().whenChanged( function (homes) {
      $scope.$apply( function () {
        $scope.homes = homes;
        $scope.showSpinner = false;
      });
    });
  })
