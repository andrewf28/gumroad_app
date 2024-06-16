require "test_helper"

class RichTextsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @rich_text = rich_texts(:one)
  end

  test "should get index" do
    get rich_texts_url, as: :json
    assert_response :success
  end

  test "should create rich_text" do
    assert_difference("RichText.count") do
      post rich_texts_url, params: { rich_text: { creator_id: @rich_text.creator_id, description: @rich_text.description, title: @rich_text.title } }, as: :json
    end

    assert_response :created
  end

  test "should show rich_text" do
    get rich_text_url(@rich_text), as: :json
    assert_response :success
  end

  test "should update rich_text" do
    patch rich_text_url(@rich_text), params: { rich_text: { creator_id: @rich_text.creator_id, description: @rich_text.description, title: @rich_text.title } }, as: :json
    assert_response :success
  end

  test "should destroy rich_text" do
    assert_difference("RichText.count", -1) do
      delete rich_text_url(@rich_text), as: :json
    end

    assert_response :no_content
  end
end
