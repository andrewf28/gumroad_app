module Api
  module V1
    class CreatorLayoutsController < ApplicationController
      def show
        creator = Creator.find(params[:creator_id])
        creator_layout = creator.creator_layout

        if creator_layout
          render json: creator_layout
        else
          render json: { error: 'Creator layout not found' }, status: :not_found
        end
      end
    end
  end
end