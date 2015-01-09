angular
  .module('listing')
  .controller('ListingSingleController', function($scope, supersonic, Listings, $localForage, User) {

    $scope.listing = null;
    $scope.showSpinner = true;
    $scope.dataId = void 0;

    // Update the view
    $scope._refreshViewData = function() {
      // find the listing that was clicked
      $localForage.getItem($scope.dataId).then(function(data){
        $scope.listing = data;
        $scope.mlsNum = data.extra.ListingID;

        $scope.photos = function() {
          var photo_list = [];
          var mls = $scope.mlsNum;
          var base_url = 'http://pcspads.com/listing_pics/' + mls + '/' + mls;
          var num;

          for(var i = 1; i <= data.extra.PhotoCount; i++) {
            num = i < 10 ? '0' + i : i;
            photo_list.push(base_url + '_' + num + '.jpg');
          }

          return photo_list;
        };

        if(Object.keys(User.getCurrent()).length) {
          $scope.isCurrentUser = true;
        }

        return;
      });
    };

    // update the view when params are set
    supersonic.ui.views.current.params.onValue(function(values) {
      $scope.dataId = values.id;
      $scope._refreshViewData();
    }); 
  });
