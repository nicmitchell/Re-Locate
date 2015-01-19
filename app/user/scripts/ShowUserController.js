angular
  .module('user')
  .controller('ShowUserController', function(User, $scope, supersonic) {
    $scope.pageTitle = 'Account';
    supersonic.ui.navigationBar.show();
    options = { title: $scope.pageTitle };
    supersonic.ui.navigationBar.update(options);

    // runs each time this page is visible
    supersonic.ui.views.current.whenVisible(function() {
      $scope.$apply(function() {
        $scope.user = User.getCurrent();

        if(Object.keys($scope.user).length) {
          $scope.userButtonText = 'Edit';
        }
      });
    });

  });
