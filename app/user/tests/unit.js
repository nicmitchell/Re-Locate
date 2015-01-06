var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('User', function() {
  it('user module is defined', function() {
  expect(angular.module('user')).to.not.be.undefined();
  });
});