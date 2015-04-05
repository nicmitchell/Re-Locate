angular
  .module('example')
  .controller('ContactController', function($scope, supersonic) {
    $scope.pageTitle = 'Contact';
    supersonic.ui.navigationBar.show();
    options = { title: $scope.pageTitle };
    supersonic.ui.navigationBar.update(options);
  });
