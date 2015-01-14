angular
  .module('home')
  .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
          //    key: 'your api key',
          v: '3.17',
          libraries: 'weather,geometry,visualization'
      });
  })
  .controller("ShowController", function ($scope, Home, Geocode, supersonic, User, Choice) {
    $scope.home = null;
    $scope.dataId = undefined;
    $scope.map = {};
    $scope.marker = {};

    var _refreshViewData = function () {
      Home.find($scope.dataId).then( function (home) {
        $scope.$apply( function () {
          $scope.home = home;
        });

        // translates address to lat/long for Google maps
        Geocode.geocode(home.ad).then(function(data){
          $scope.map = data.map;
          $scope.marker = data.marker;
        });

        $scope.choice = Choice.get()[$scope.home.id];
      });
    };

    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      $scope.choice = ($scope.choice === bool) ? null : bool;
      
      Choice.set($scope.home.id, $scope.choice);
    };    

    if(Object.keys(User.getCurrent()).length) {
      $scope.isCurrentUser = true;
    }

    $scope.photoSwipe = function() {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      var items = [];
      var mls = $scope.home.id;
      var base_url = 'http://pcspads.com/listing_pics/' + mls + '/' + mls;
      var num, pic;
      
      for(var i = 1; i <= $scope.home.extra.PhotoCount; i++) {
        num = i < 10 ? '0' + i : i;
        pic = { w: 580, h: 436 };
        pic.src = base_url + '_' + num + '.jpg';

        items.push(pic);
      }

      // define options (if needed)
      var options = {
          // optionName: 'option value'
          // for example:
          index: 0 // start at first slide
      };

      // Initializes and opens PhotoSwipe
      var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
    };

    supersonic.ui.views.current.whenVisible( function () {
      steroids.view.removeLoading();
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

  });
