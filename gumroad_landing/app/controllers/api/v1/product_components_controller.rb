class Api::V1::ProductComponentsController < ApplicationController
  before_action :set_product_component, only: %i[ show update destroy ]

  # GET /product_components
  def index
    @product_components = ProductComponent.all

    render json: @product_components
  end

  # GET /product_components/1
  def show
    render json: @product_component
  end

  # POST /product_components
  def create
    @product_component = ProductComponent.new(product_component_params)

    if @product_component.save
      render json: @product_component, status: :created, location: @product_component
    else
      render json: @product_component.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_components/1
  def update
    if @product_component.update(product_component_params)
      render json: @product_component
    else
      render json: @product_component.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_components/1
  def destroy
    @product_component.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_component
      @product_component = ProductComponent.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def product_component_params
      params.require(:product_component).permit(:product_id, :title, :desc)
    end
end
