require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  test 'Listing class existance' do
    assert_instance_of Listing, Listing.new
  end

  test 'instance' do
    assert_instance_of Listing, Listing.new
  end

  test 'rets_sqft range' do
    # use 'send' for private methods
    assert_equal 1600, Listing.new.send(:rets_sqft, {'SqFtRange' => '1501 TO 1600'})
  end

  test 'rets_sqft max' do
    assert_equal 5000, Listing.new.send(:rets_sqft, {'SqFtRange' => '5000 PLUS'})
  end

  test 'rets_baths 2.0 with HalfBaths 0' do
    assert_equal 2.0, Listing.new.send(:rets_baths, {'BathsTotal' => '2', 'HalfBaths' => '0'})
  end

  test 'rets_baths 1.5 with HalfBaths 1' do
    assert_equal 1.5, Listing.new.send(:rets_baths, {'BathsTotal' => '1', 'HalfBaths' => '1'})
  end

  test 'rets_baths 1.5 with HalfBaths 2' do
    assert_equal 1.5, Listing.new.send(:rets_baths, {'BathsTotal' => '1', 'HalfBaths' => '2'})
  end

  test 'rets_active no' do
    assert_equal false, Listing.new.send(:rets_active, 'Closed')
  end

  test 'rets_active yes' do
    assert_equal true, Listing.new.send(:rets_active, 'Active')
  end

end
