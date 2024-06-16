class Api::V1::CreatorLayoutsController < ApplicationController
  before_action :set_creator_layout, only: %i[ show update destroy ]

  # GET /creator_layouts
  def index
    @creator_layouts = CreatorLayout.all

    render json: @creator_layouts
  end

  # GET /creator_layouts/1
  def show
    render json: @creator_layout
  end

  # POST /creator_layouts
  def create
    @creator_layout = CreatorLayout.new(creator_layout_params)

    if @creator_layout.save
      render json: @creator_layout, status: :created, location: @creator_layout
    else
      render json: @creator_layout.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /creator_layouts/1
  def update
    if @creator_layout.update(creator_layout_params)
      render json: @creator_layout
    else
      render json: @creator_layout.errors, status: :unprocessable_entity
    end
  end

  # DELETE /creator_layouts/1
  def destroy
    @creator_layout.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_creator_layout
      @creator_layout = CreatorLayout.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def creator_layout_params
      params.require(:creator_layout).permit(:creator_id, :layout)
    end
end
