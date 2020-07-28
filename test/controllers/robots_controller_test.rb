require 'test_helper'

class RobotsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get robots_index_url
    assert_response :success
  end

  test "should get show" do
    get robots_show_url
    assert_response :success
  end

end
