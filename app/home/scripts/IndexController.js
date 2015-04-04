angular
  .module('home')
  .controller("IndexController", function ($scope, Choice, Search, Sort, supersonic) {
    $scope.homes = [];

    // $scope.showSpinner = true;
    $scope.loadingHomes = true;
    $scope.currentPage = 0;
    $scope.pageChunk = 0;
    $scope.count = 0;
    $scope.query = Search.get();  // set query based on defaults
    $scope.sort = Sort.get();  // set sort params based on defaults

    // var fetch = function(query){
    //   Search.fetch(query, $scope.sort, $scope.currentPage, updateHomes);
    //   $scope.loadingHomes = true;
    // };

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
      $scope.loadingHomes = false;
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
    $scope.scrollLoad = function(){
      $scope.loadingHomes = true;
      console.log('loading homes in scrollLoad', $scope.loadingHomes);
      $scope.currentPage += 1;
      // fetch($scope.query);
      Search.fetch($scope.query, $scope.sort, $scope.currentPage, updateHomes);
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
      supersonic.ui.modal.show("preloadedSort");
      $scope.showSpinner = true;
      // supersonic.ui.views.find("preloadedSort").then( function(view) {
      //   supersonic.ui.layers.push(view);
      // });
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
      .subscribe( function(data) {
        // update the view and scroll to top
         console.log('data from sort', data);
         $scope.$apply(function(){
           $scope.homes = [];
           updateHomes(data);
           window.scrollTo(0, 0);
         });
        // $scope.$apply(function () {
        //   $scope.sort = s;
        //   window.scrollTo(0, 0);
        // });
      });
  })
