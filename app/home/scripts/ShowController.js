angular
  .module('home')
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          //    key: 'your api key',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })
  .controller("ShowController", function ($scope, Home, Geocode, supersonic) {
    $scope.home = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;
    $scope.map = {};
    $scope.marker = {};

    var _refreshViewData = function () {
      Home.find($scope.dataId).then( function (home) {
        $scope.$apply( function () {
          // translates address to lat/long for Google maps
          // will need to take an address
          Geocode.geocode(home.ad).then(function(data){
            $scope.map = data.map;
            $scope.marker = data.marker;
          });

          $scope.home = home;
          $scope.showSpinner = false;
        });
      });
    };

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

   

  });
