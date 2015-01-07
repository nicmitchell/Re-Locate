angular
  .module('user')
  .controller('EditUserController', function(User, $scope, supersonic) {
    $scope.user = User.getCurrent();

    $scope.submitForm = function() {
      User.setCurrent($scope.user);
      return supersonic.ui.layers.pop(); //back
    };

  });
