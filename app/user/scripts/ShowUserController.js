angular
  .module('user')
  .controller('ShowUserController', function(User, $scope, supersonic) {

    // runs each time this page is visible
    supersonic.ui.views.current.whenVisible(function() {
      $scope.$apply(function() {
        $scope.user = User.getCurrent();

        $scope.userButtonText = 'Create';
        if(Object.keys($scope.user).length) {
          $scope.userButtonText = 'Edit';
        }
      });
    });

  });
  
