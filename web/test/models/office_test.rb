require 'test_helper'

class OfficeTest < ActiveSupport::TestCase
  test 'rets_process' do
    records = [
      {'OfficeStatus' => '- Active', 'Name' => 'Cool Realty', 'OfficeUID' => '12345'},
      {'OfficeStatus' => '- Inactive', 'Name' => 'Sucky Realty', 'OfficeUID' => '67890'},
    ]
    Office.rets_process(records)
    office_active = Office.where(mls_id: '12345').first

    assert_equal 'Cool Realty', office_active.name
    assert_equal true, office_active.active

    office_inactive = Office.where(mls_id: '67890').first
    assert_equal 'Sucky Realty', office_inactive.name
    assert_equal false, office_inactive.active
  end
end
