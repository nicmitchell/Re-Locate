angular
  .module('home')
  .controller("IndexController", function ($scope, Home, supersonic, $filter) {
    $scope.homes = null;
    $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.range = function(fieldName, min, max){
      if (min === undefined) min = 1;
      if (max === undefined) max = 10;
      return function predicateFunc(item) {
        return min <= item[fieldName] && item[fieldName] <= max;
      };
    };

    $scope.range = {
      from: 2,
      to: 9
    };

    $scope.q = {
      ad: '',
      bd: {
        from: 2,
        to: 6
      },
      ba: {
        from: 1,
        to: 4
      },
      pr: {
        from: 100000,
        to: 500000
      },
      yr: {
        from: 1970,
        to: 2010
      },
      ft: {
        from: 900,
        to: 3000
      }
    };

    $scope.openSearch = function(){
      supersonic.ui.drawers.open("left").then( function() {
        supersonic.logger.debug("search drawer was shown");
      });
      // supersonic.ui.modal.open("home#search").then( function() {
      //   supersonic.logger.debug("search modal was shown");
      // });
    };

    $scope.closeSearch = function(){
      // $scope.q = searchResults(q);
      supersonic.ui.drawers.close().then( function() {
        supersonic.logger.debug("search drawer was hidden");
      });
      // supersonic.ui.modal.hide().then( function() {
      //   supersonic.logger.debug("search modal was hidden");
      // });
    };

    Home.all().whenChanged( function (homes) {
      $scope.$apply( function () {
        $scope.homes = homes;
        $scope.showSpinner = false;
      });
    });
    $scope.$broadcast('refreshSlider');
  })
