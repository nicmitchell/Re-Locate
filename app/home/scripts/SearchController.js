angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search) {
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
      // TODO: add faves / unfaves
      query.greaterThan('bd', $scope.q.bd);
      query.greaterThan('ba', $scope.q.ba);
      query.greaterThan('yr', $scope.q.yr);
      query.greaterThan('ft', $scope.q.ft);
      query.greaterThan('pr', $scope.q.pr.min);
      query.lessThan('pr', $scope.q.pr.max);
      if($scope.q.ad){
        query.startsWith('ad', $scope.q.ad);
      }

      query.find({
        success: function(results) {

          // check for results
          if (!results.length){
            $scope.$apply(function(){
              $scope.error = 'Sorry, no results were found. Please update your search and try again.';
            });
            return;
          }
            
          // var q 
          var homes = [];
          for (var i = 0; i < results.length; i++) { 
            var home = results[i].attributes;
            homes.push(home);
          }
          $scope.homes = homes;
          var query = { homes: homes };
          supersonic.data.channel('query').publish(query);
          supersonic.ui.modal.hide();  
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
