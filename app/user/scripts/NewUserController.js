angular
  .module('user')
  .controller('NewUserController', function(User, $scope, supersonic) {
    $scope.title = 'Create';
    $scope.user = User.getCurrent();

    $scope.submitForm = function() {
      User.setCurrent($scope.user);
      return supersonic.ui.layers.pop(); //back
    };

  });
