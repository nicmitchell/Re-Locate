angular
  .module('home')
  .controller("IndexController", function ($scope, Home, supersonic) {
    $scope.homes = null;
    $scope.showSpinner = true;
    $scope.currentPage = 1;

    Home.all().whenChanged( function (homes) {
        $scope.$apply( function () {
          console.log('homes',homes);
          $scope.homes = homes;
          $scope.showSpinner = false;
        });
    });
  });