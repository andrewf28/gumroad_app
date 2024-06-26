require "test_helper"

class CreatorsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @creator = creators(:one)
  end

  test "should get index" do
    get creators_url, as: :json
    assert_response :success
  end

  test "should create creator" do
    assert_difference("Creator.count") do
      post creators_url, params: { creator: { name: @creator.name, pfp: @creator.pfp, rating: @creator.rating, ratingAmt: @creator.ratingAmt } }, as: :json
    end

    assert_response :created
  end

  test "should show creator" do
    get creator_url(@creator), as: :json
    assert_response :success
  end

  test "should update creator" do
    patch creator_url(@creator), params: { creator: { name: @creator.name, pfp: @creator.pfp, rating: @creator.rating, ratingAmt: @creator.ratingAmt } }, as: :json
    assert_response :success
  end

  test "should destroy creator" do
    assert_difference("Creator.count", -1) do
      delete creator_url(@creator), as: :json
    end

    assert_response :no_content
  end
end
