angular
  .module('home')
  .controller("IndexController", function ($scope, Home, Choice, supersonic, query) {
    $scope.homes = null;
    $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.q = query; // set query based on defaults


    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      return $scope.choice = ($scope.choice === bool) ? null : bool;
    };

    $scope.groupFilter = function(bool) {
      $scope.q.group = $scope.setChoice(bool) === null ? [] : Choice.group(bool);
    };

    

    // Open the search modal view and share current search params
    $scope.openSearch = function(){
      supersonic.ui.modal.show("home#search").then( function() {
        supersonic.data.channel('query').publish($scope.q);
      });
    };

    // Receive query params from the search view
    supersonic.data.channel('query')
      .subscribe( function(q) {
        $scope.$apply(function () {
          $scope.q = q;
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
