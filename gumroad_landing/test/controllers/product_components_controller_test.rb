require "test_helper"

class ProductComponentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @product_component = product_components(:one)
  end

  test "should get index" do
    get product_components_url, as: :json
    assert_response :success
  end

  test "should create product_component" do
    assert_difference("ProductComponent.count") do
      post product_components_url, params: { product_component: { desc: @product_component.desc, product_id: @product_component.product_id, title: @product_component.title } }, as: :json
    end

    assert_response :created
  end

  test "should show product_component" do
    get product_component_url(@product_component), as: :json
    assert_response :success
  end

  test "should update product_component" do
    patch product_component_url(@product_component), params: { product_component: { desc: @product_component.desc, product_id: @product_component.product_id, title: @product_component.title } }, as: :json
    assert_response :success
  end

  test "should destroy product_component" do
    assert_difference("ProductComponent.count", -1) do
      delete product_component_url(@product_component), as: :json
    end

    assert_response :no_content
  end
end
