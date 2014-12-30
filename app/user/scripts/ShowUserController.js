angular
  .module('user')
  .controller('ShowUserController', function(User, $scope, supersonic) {

    // runs each time this page is visible
    supersonic.ui.views.current.whenVisible(function() {
      $scope.$apply(function() {
        $scope.user = User.getCurrent();
        // hide/show correct buttons
        $scope.isCurrentUser = Object.keys($scope.user).length;
      });
    });

    // for development only (unless we allow a user to delete his/her account)
    $scope.destroy = function() {
      localStorage.removeItem('currentUser');
      $scope.user = User.getCurrent();
      // hide/show correct buttons
      $scope.isCurrentUser = false;
    };

  });
