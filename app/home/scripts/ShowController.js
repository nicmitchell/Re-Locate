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
    $scope.home = {ad: 'Loading...'}; // nav title
    $scope.showSpinner = true; // for initial page preload
    $scope.map = {};
    $scope.marker = {};

    var _messageReceived = function(event) {
      if (event.data.recipient == 'homeShow') { // message intended for us?

        if (event.data.id) {
          _refreshViewData(event.data.id);
        } else { // reset view for next load
          $scope.$apply(function() {
            $scope.home = {ad: 'Loading...'}; // clear last address
            window.scrollTo(0, 0); // preloaded page retains last position
            $scope.showSpinner = true; //ready for next load
          });
        }
      }

    };
    window.addEventListener('message', _messageReceived);

    var _refreshViewData = function(mls) {
      Home.find(mls).then( function (home) {
        $scope.$apply( function () {
          $scope.showSpinner = false;
          $scope.home = home;
        });

        $scope.choice = Choice.get()[$scope.home.id];

        // translates address to lat/long for Google maps
        Geocode.geocode(home.ad).then(function(data){
          $scope.map = data.map;
          $scope.marker = data.marker;
        });

      });

      return;
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

  });
