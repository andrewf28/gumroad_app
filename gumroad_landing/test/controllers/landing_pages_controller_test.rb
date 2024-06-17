require "test_helper"

class LandingPagesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @landing_page = landing_pages(:one)
  end

  test "should get index" do
    get landing_pages_url, as: :json
    assert_response :success
  end

  test "should create landing_page" do
    assert_difference("LandingPage.count") do
      post landing_pages_url, params: { landing_page: { creator_id: @landing_page.creator_id, structure: @landing_page.structure } }, as: :json
    end

    assert_response :created
  end

  test "should show landing_page" do
    get landing_page_url(@landing_page), as: :json
    assert_response :success
  end

  test "should update landing_page" do
    patch landing_page_url(@landing_page), params: { landing_page: { creator_id: @landing_page.creator_id, structure: @landing_page.structure } }, as: :json
    assert_response :success
  end

  test "should destroy landing_page" do
    assert_difference("LandingPage.count", -1) do
      delete landing_page_url(@landing_page), as: :json
    end

    assert_response :no_content
  end
end
