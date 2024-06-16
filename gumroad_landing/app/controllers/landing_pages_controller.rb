class LandingPagesController < ApplicationController
  before_action :set_landing_page, only: %i[ show update destroy ]

  # GET /landing_pages
  def index
    @landing_pages = LandingPage.all

    render json: @landing_pages
  end

  # GET /landing_pages/1
  def show
    render json: @landing_page
  end

  # POST /landing_pages
  def create
    @landing_page = LandingPage.new(landing_page_params)

    if @landing_page.save
      render json: @landing_page, status: :created, location: @landing_page
    else
      render json: @landing_page.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /landing_pages/1
  def update
    if @landing_page.update(landing_page_params)
      render json: @landing_page
    else
      render json: @landing_page.errors, status: :unprocessable_entity
    end
  end

  # DELETE /landing_pages/1
  def destroy
    @landing_page.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_landing_page
      @landing_page = LandingPage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def landing_page_params
      params.require(:landing_page).permit(:structure, :creator_id)
    end
end
