angular
  .module('home')
  .controller("IndexController", function ($scope, Choice, Search, Sort, supersonic) {
    $scope.homes = [];
    $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.q = Search.get();  // set query based on defaults
    $scope.sort = Sort.get();  // set sort params based on defaults
    $scope.test = null;
    var testSearch = function(){

      var model = Parse.Object.extend("home");
      var query = new Parse.Query(model);

      query.equalTo("bd", 4);
      query.find({
        success: function(results) {
          console.log("Successfully retrieved " + results.length + " homes.");
          // Do something with the returned Parse.Object values
          $scope.$apply( function () {
            for (var i = 0; i < results.length; i++) { 
              var object = results[i].attributes;
              $scope.homes.push(object);
            }
            $scope.showSpinner = false;
          });
        },
        error: function(error) {
          console.log("Error: " + error.code + " " + error.message);
        }
      });
      
    };
    testSearch();

    supersonic.ui.views.current.whenVisible( function () {
      // alert preloadedHomeShow to clear last home
      window.postMessage({ recipient: 'homeShow', id: null });
    });

    $scope.openShow = function(id) {
      window.postMessage({ recipient: 'homeShow', id: id });
      supersonic.ui.views.find('preloadedHomeShow').then(function(view) {
        supersonic.ui.layers.push(view);
      });
    };

    // Infinite scroll for home#index
    $scope.scrollLimit = 5;
    $scope.scrollLoad = function(){
      $scope.scrollLimit += 5;
    };
    
    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      $scope.choice = ($scope.choice === bool) ? null : bool;
      return $scope.choice;
    };

    $scope.groupFilter = function(bool) {
      $scope.q.group = $scope.setChoice(bool) === null ? [] : Choice.group(bool);
    };

    // Open the search modal view and share current search params
    $scope.openSearch = function(){
      supersonic.data.channel('query').publish($scope.q);
      supersonic.ui.modal.show('preloadedSearch').then( function() {
      });
    };

    // Open the sort modal view and save sort params to local storage
    $scope.openSort = function(){
      Sort.set($scope.sort);
      supersonic.ui.modal.show('preloadedSort').then( function() {
      });
    };

    // Receive query params from the search view
    supersonic.data.channel('query')
      .subscribe( function(q, homes) {
        // update the view and scroll to top
        $scope.$apply(function () {
          $scope.q = q;
          $scope.homes = homes;
          window.scrollTo(0, 0);
        });
      });

    // Receive sort params from the sort view
    supersonic.data.channel('sort')
      .subscribe( function(s) {
        // update the view and scroll to top
        $scope.$apply(function () {
          $scope.sort = s;
          window.scrollTo(0, 0);
        });
      });

    // show the page when $scope.homes is loaded from the model
    // Home.all().whenChanged( function (homes) {
    //   $scope.$apply( function () {
    //     $scope.homes = homes;
    //     $scope.showSpinner = false;
    //   });
    // });
  })
