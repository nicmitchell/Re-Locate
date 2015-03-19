angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search, Home) {

    // Load the query parameters from local storage
    $scope.q = Search.get();
    $scope.homes = [];
    $scope.error = false;

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      $scope.error = false;
      var model = Parse.Object.extend("home");
      var query = new Parse.Query(model);


      // scope.q  === values of search input fields
      // set query.values for each search parameter
      query.greaterThan('bd', $scope.q.bd);
      query.greaterThan('ba', $scope.q.ba);
      query.greaterThan('yr', $scope.q.yr);
      query.greaterThan('ft', $scope.q.ft);
      query.greaterThan('pr', $scope.q.pr.min);
      query.lessThan('pr', $scope.q.pr.max);
      if($scope.q.ad){
        query.startsWith('ad', $scope.q.ad);
      }


        
        // item.bd >= q.bd && // bedrooms
        // item.ba >= q.ba && // bathrooms
        // ((q.pr.max === q.pr.limit) ? item.pr >= q.pr.min : 
        // item.pr >= q.pr.min && item.pr <= q.pr.max) && // price range
        // item.yr >= q.yr && // year
        // item.ft >= q.ft && // sq feet
        // _.contains(item.ad, q.ad) && // address
        // ((q.group && q.group.length > 0) ? _.contains(q.group, item.id) : true) //favs/unfavs (by MLS numbers)

      query.find({
        success: function(results) {
            
            var homes = [];
            // var q 
            for (var i = 0; i < results.length; i++) { 
              var home = results[i].attributes;
              homes.push(home);
            }
            $scope.homes = homes;
            var query = { homes: homes };
            supersonic.data.channel('query').publish(query);
            // supersonic.ui.modal.hide();  
            // $scope.showSpinner = false;
            supersonic.ui.layers.pop();
          // });
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
          $scope.error = "Oops, something went wrong. Please try again";
        }
      });
    };
    $scope.cancelSearch = function(){
      var query = { homes: $scope.homes };
      supersonic.data.channel('query').publish(query);
      $scope.error = false;
      supersonic.ui.layers.pop();
    };
    $scope.showError = function(){
      $scope.error = "Oops, something went wrong. Please try again";
    };
  })
