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
      console.log('_messageRecieved triggered', event);
      if (event.data.recipient === 'homeShow') { // message intended for us?
        console.log('message intended for home show, event.data.id', event.data.id);

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

    var _refreshViewData = function(id) {
      console.log('_refreshView called, id is', id);
      var home = Parse.Object.extend('home');
      var query = new Parse.Query(home);
      query.get(id, {
        success: function(home){
          console.log('single query home', home);
          $scope.$apply( function () {
              $scope.showSpinner = false;
              $scope.home = home.attributes;
            });
        },
        error: function(error){
          console.log('error', error);
        }
      });

      //   $scope.choice = Choice.get()[$scope.home.id];

      //   // translates address to lat/long for Google maps
      //   Geocode.geocode(home.ad).then(function(data){
      //     $scope.map = data.map;
      //     $scope.marker = data.marker;
      //   });

      // });

      return;
    };

    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      $scope.choice = ($scope.choice === bool) ? null : bool;
      Choice.set($scope.home.ml, $scope.choice);
    };    

    if(Object.keys(User.getCurrent()).length) {
      $scope.isCurrentUser = true;
    }

    $scope.photoSwipe = function() {
      var pswpElement = document.querySelectorAll('.pswp')[0];

      var items = [];
      var mls = $scope.home.ml;
      var base_url = '/img/interior-images/interior_';
      // console.log('base_url', base_url);
      var num, pic;
      
      for(var i = 1; i <= $scope.home.extra.PhotoCount; i++) {
        num = i < 10 ? '0' + i : i;
        pic = { w: 580, h: 436 };
        pic.src = base_url + num + '.jpg';
        console.log('pic src', pic.src);

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
