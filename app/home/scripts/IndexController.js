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
    }
    $scope.bdMin = 1;
    $scope.bdMax = 10;
    // $scope.q;
    // $scope.q.bd;
    // $scope.q.ba;

    $scope.openSearch = function(){
      supersonic.ui.drawers.open("left").then( function() {
        supersonic.logger.debug("search drawer was shown");
      });
      // supersonic.ui.modal.open("home#search").then( function() {
      //   supersonic.logger.debug("search modal was shown");
      // });
    };

    $scope.closeSearch = function(){
      $scope.q = searchResults(q);
      // $scope.q.bd;
      // $scope.q.ba;
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
  })
  .filter('bedsFilter', function(){
    console.log('bedsFilter called');
    return function(items, field, q, minBeds, maxBeds){
      console.log('q', q);
      // console.log('minBeds', minBeds);
      // console.log('maxBeds', maxBeds);
      if (items === null) return;

      console.log('items', items);
      return items.filter(function(item){
        return (item[field] > q.bd.min && item[field] < q.bd.max);
      });
    };
  })
