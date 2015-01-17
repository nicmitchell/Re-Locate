angular
  .module('home')
  .controller("IndexController", function ($scope, Home, Choice, Search, Sort, supersonic) {
    $scope.homes = null;
    $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.q = Search.get();  // set query based on defaults
    $scope.sort = Sort.get();  // set sort params based on defaults

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
    $scope.scrollLimit = 10;
    $scope.scrollLoad = function(){
      $scope.scrollLimit += 10;
    };
    
    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      return $scope.choice = ($scope.choice === bool) ? null : bool;
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
      .subscribe( function(q) {
        $scope.$apply(function () {
          $scope.q = q;
        });
      });

    // Receive sort params from the sort view
    supersonic.data.channel('sort')
      .subscribe( function(s) {
        $scope.$apply(function () {
          $scope.sort = s;
        });
      });

    // show the page when $scope.homes is loaded from the model
    Home.all().whenChanged( function (homes) {
      $scope.$apply( function () {
        $scope.homes = homes;
        $scope.showSpinner = false;
      });
    });
  })
