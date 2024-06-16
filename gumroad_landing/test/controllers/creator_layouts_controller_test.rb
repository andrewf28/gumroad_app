require "test_helper"

class CreatorLayoutsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @creator_layout = creator_layouts(:one)
  end

  test "should get index" do
    get creator_layouts_url, as: :json
    assert_response :success
  end

  test "should create creator_layout" do
    assert_difference("CreatorLayout.count") do
      post creator_layouts_url, params: { creator_layout: { creator_id: @creator_layout.creator_id, layout: @creator_layout.layout } }, as: :json
    end

    assert_response :created
  end

  test "should show creator_layout" do
    get creator_layout_url(@creator_layout), as: :json
    assert_response :success
  end

  test "should update creator_layout" do
    patch creator_layout_url(@creator_layout), params: { creator_layout: { creator_id: @creator_layout.creator_id, layout: @creator_layout.layout } }, as: :json
    assert_response :success
  end

  test "should destroy creator_layout" do
    assert_difference("CreatorLayout.count", -1) do
      delete creator_layout_url(@creator_layout), as: :json
    end

    assert_response :no_content
  end
end
