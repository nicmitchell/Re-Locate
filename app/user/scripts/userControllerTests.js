// describe('User', function() {
//   it('user module is defined', function() {
//     expect(angular.module('user')).to.not.be.undefined();
//   });
// });

// describe('Unit: MainController', function() {
//   // Load the module with MainController
//   beforeEach(module('myApp'));

//   var ctrl, scope;
//   // inject the $controller and $rootScope services
//   // in the beforeEach block
//   beforeEach(inject(function($controller, $rootScope) {
//     // Create a new scope that's a child of the $rootScope
//     scope = $rootScope.$new();
//     // Create the controller
//     ctrl = $controller('MainController', {
//       $scope: scope
//     });
//   }));

//   it('should create $scope.greeting when calling sayHello', function() {
//     expect(scope.greeting).to.be.undefined();
//     scope.sayHello();
//     expect(scope.greeting).to.equal('Hello Ari');
//   });
// });
