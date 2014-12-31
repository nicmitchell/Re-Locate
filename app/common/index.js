angular.module('common', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'supersonic',
  'LocalForageModule'
])
.config(['$localForageProvider', function($localForageProvider){
  $localForageProvider.config({
    name: 'appData' // name of the database and prefix for your data, it is "lf" by default
  });
}]);
