angular
  .module('home')
  .controller("IndexController", function ($scope, Home, supersonic) {
    $scope.homes = null;
    $scope.showSpinner = true;

    Home.all().whenChanged( function (homes) {
        $scope.$apply( function () {
          $scope.homes = homes;
          $scope.showSpinner = false;
        });
    });
  });