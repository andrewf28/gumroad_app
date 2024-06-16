class RichTextsController < ApplicationController
  before_action :set_rich_text, only: %i[ show update destroy ]

  # GET /rich_texts
  def index
    @rich_texts = RichText.all

    render json: @rich_texts
  end

  # GET /rich_texts/1
  def show
    render json: @rich_text
  end

  # POST /rich_texts
  def create
    @rich_text = RichText.new(rich_text_params)

    if @rich_text.save
      render json: @rich_text, status: :created, location: @rich_text
    else
      render json: @rich_text.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rich_texts/1
  def update
    if @rich_text.update(rich_text_params)
      render json: @rich_text
    else
      render json: @rich_text.errors, status: :unprocessable_entity
    end
  end

  # DELETE /rich_texts/1
  def destroy
    @rich_text.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_rich_text
      @rich_text = RichText.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rich_text_params
      params.require(:rich_text).permit(:title, :description, :creator_id)
    end
end
