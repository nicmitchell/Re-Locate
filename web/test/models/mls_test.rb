require 'test_helper'

class MlsTest < ActiveSupport::TestCase
  test 'Mls class existance' do
    assert_instance_of Mls, Mls.new
  end

  test 'client' do
    assert_instance_of Rets::Client, Mls.client
  end  
end
