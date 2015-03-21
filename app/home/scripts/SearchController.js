angular
  .module('home')
  .controller("SearchController", function ($scope, supersonic, Search) {
    // Load the query parameters from local storage
    $scope.q = Search.get();
    $scope.homes = [];
    $scope.error = false;

    // Hide the search modal view and publish search params
    $scope.closeSearch = function(){
      // run search query
        // Search.query(q)


      $scope.error = false;
      // var model = Parse.Object.extend("home");
      // var query = new Parse.Query(model);

      Search.fetch($scope.q, function(data){
        if(data.error){
          $scope.$apply(function(){
            $scope.error = data.error;
          });
        }
        if(!data.error){
          $scope.homes = data.homes;
          // var query = { homes: homes };
          supersonic.data.channel('query').publish(data.homes);
          // console.log('homes', data.homes);
          localStorage.setItem('homes', JSON.stringify(data.homes));
          Search.set($scope.q);
          supersonic.ui.modal.hide();  
        }
      });
    };

    $scope.cancelSearch = function(){
      var query = { homes: $scope.homes };
      supersonic.data.channel('query').publish(query);
      $scope.error = false;
      supersonic.ui.modal.hide();
    };
    
    $scope.errorTest = function(){
      $scope.error = "Oops, something went wrong. Please try again";
    };
  })
