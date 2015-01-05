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
    assert_equal false, Listing.new.send(:rets_active, {'ListingStatus' => 'Closed'})
  end

  test 'rets_active yes' do
    assert_equal true, Listing.new.send(:rets_active, {'ListingStatus' => 'Active'})
  end

  test 'rets_office' do
    subject_name = 'Cool Realty'
    Office.create(mls_id: '12345', name: subject_name)
    Office.create(mls_id: '67890', name: 'Sucky Realty')
    listing = Listing.new(extra: {})
    listing.send(:rets_office, {'ListingOfficeUID' => '12345'})

    assert_equal subject_name, listing.extra['office_name']
  end

end
