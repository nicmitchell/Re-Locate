var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('Listing', function() {
  it('listing module is defined', function() {
    expect(angular.module('listing')).to.not.be.undefined();
  });
});