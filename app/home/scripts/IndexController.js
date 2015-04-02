angular
  .module('home')
  .controller("IndexController", function ($scope, Choice, Search, Sort, supersonic) {
    $scope.homes = [];

    // $scope.showSpinner = true;
    $scope.currentPage = 0;
    $scope.pageChunk = 0;
    $scope.count = 0;
    $scope.query = Search.get();  // set query based on defaults
    $scope.sort = Sort.get();  // set sort params based on defaults

    var fetch = function(query){
      Search.fetch(query, $scope.currentPage, updateHomes);
    };

    var updateHomes = function(data){
      // update homes on $scope
      supersonic.logger.log('Update homes called');
      $scope.showSpinner = true;
      $scope.count = data.count;
      var homes = data.homes;
      for (var i = 0, l = homes.length; i < l; i++){
        $scope.homes.push(homes[i]);
      }
      console.log('homes in updateHomes', $scope.homes);
      // window.scrollTo(0, 0);
      $scope.showSpinner = false;
    };

    supersonic.ui.views.current.whenVisible( function () {
      // alert preloadedHomeShow to clear last home
      window.postMessage({ recipient: 'homeShow', id: null });
      // fetch($scope.query, $scope.currentPage);
    });

    $scope.openShow = function(id) {
      window.postMessage({ recipient: 'homeShow', id: id });
      supersonic.ui.views.find('preloadedHomeShow').then(function(view) {
        supersonic.ui.layers.push(view);
      });
    };

    // Infinite scroll for home#index
    // $scope.scrollLimit = 5;
    $scope.scrollLoad = function(){
      // $scope.scrollLimit += 5;
      $scope.currentPage += 1;
      fetch($scope.query);
      supersonic.logger.log('scrollLoad called');
    };
    
    // Determines whether user has clicked Fave or Trash
    $scope.setChoice = function(bool) {
      // null (to unset) if matches
      $scope.choice = ($scope.choice === bool) ? null : bool;
      return $scope.choice;
    };

    // Called when clicking on Fave or Trash buttons in homes#index
    $scope.groupFilter = function(bool) {
      $scope.query.group = ($scope.setChoice(bool) === null ) ? [] : Choice.group(bool);
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
        console.log('data from search', data);
        $scope.$apply(function(){
          $scope.homes = [];
          updateHomes(data);
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
  })
