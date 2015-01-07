describe('Sanity Check:', function () {
  it('the universe is not borken', function(){
    expect(true).toBe(true);
  });
});

describe('Listing Module', function() {
  
  beforeEach(module('listing'));

  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope, $httpBackend, $localForage, $q) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('ListingMultipleController', {
      $scope: scope
    });
    http = $httpBackend;
    localForage = $localForage;
    q = $q;
  }));

  it('should have a function for $scope.getListings', function() {
    expect(typeof scope.getListings).toBe('function');
  });

  it('should set items in localForage', function(done) {
    localForage.setItem('testUser','Test User');
    scope.$on("LocalForageModule.setItem", 
      function(scope, item){ 
        console.log('localForage key in set', item.key); 
        expect(item.key).toBe('testUser');
        done();
      });
  });

  xit('should retrieve items in localForage', function(done){
    var user;
    var testData = function() { 
      return localForage.getItem('testUser')
      .then(function(data){
        user = data;
        console.log('user in promise', user);
        done(); 
      });
      // done();
    };//.then(function(data){
    testData();
    // console.log('async test', user);
      // done();
    // });
    // scope.$apply();
    // .finally(function(){ done(); }); 
  });
});
