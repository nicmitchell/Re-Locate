angular
  .module('home')
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          //    key: 'your api key',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })
  .controller("ShowController", function ($scope, Home, Geocode, supersonic, User) {
    $scope.home = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;
    $scope.map = {};
    $scope.marker = {};

    var _refreshViewData = function () {
      Home.find($scope.dataId).then( function (home) {
        $scope.$apply( function () {
          $scope.home = home;
          console.log('home.premium', home.premium)
          $scope.showSpinner = false;

          // translates address to lat/long for Google maps
          // will need to take an address
          Geocode.geocode(home.ad).then(function(data){
            $scope.map = data.map;
            $scope.marker = data.marker;
          });

        });
      });
    };

    if(Object.keys(User.getCurrent()).length) {
      $scope.isCurrentUser = true;
    }

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
