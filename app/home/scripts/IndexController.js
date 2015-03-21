angular
  .module('home')
  .controller("IndexController", function ($scope, Choice, Search, Sort, supersonic) {
    $scope.homes = [];

    // $scope.showSpinner = true;
    $scope.currentPage = 1;
    $scope.q = Search.get();  // set query based on defaults
    $scope.sort = Sort.get();  // set sort params based on defaults

    var fetch = function(params, page){
      Search.fetch(query, updateHomes($scope.q));
    };

    var updateHomes = function(data){
      $scope.showSpinner = true;
        // update the view and scroll to top
        var homes = data.homes;
        $scope.$apply(function () {
          supersonic.logger.log('Update homes called');
          $scope.homes = homes;
          window.scrollTo(0, 0);
          $scope.showSpinner = false;
        });
    };

    // fetch($scope.q, $scope.currentPage);

    supersonic.ui.views.current.whenVisible( function () {
      // alert preloadedHomeShow to clear last home
      window.postMessage({ recipient: 'homeShow', id: null });
      fetch($scope.q, $scope.currentPage);
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

    // Open the search view and share current search params
    $scope.openSearch = function(){
      supersonic.ui.modal.show("preloadedSearch");
      $scope.showSpinner = true;
    };

    // Open the sort view and save sort params to local storage
    $scope.openSort = function(){
      Sort.set($scope.sort);
      supersonic.ui.views.find("preloadedSort").then( function(view) {
        supersonic.ui.layers.push(view);
      });
    };

    // Receive query params from the search view
    supersonic.data.channel('query')
      .subscribe( function(data) {
        updateHomes(data);
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
  })
