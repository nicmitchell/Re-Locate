angular.module('common', [
  // Declare here all AngularJS dependencies that are shared by all modules.
  'supersonic',
  'LocalForageModule'
])
.config(['$localForageProvider', function($localForageProvider){
  // Notify on itemSet, itemRemove
  $localForageProvider.setNotify(true, true); 
  // name of the database and prefix for your data, it is "lf" by default
  $localForageProvider.config({
    name: 'appData' 
  });
}]);

steroids.screen.setAllowedRotations(['portrait'])
