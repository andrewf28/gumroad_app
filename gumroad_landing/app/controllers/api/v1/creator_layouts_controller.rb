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

      def update
        creator = Creator.find(params[:creator_id])
        creator_layout = creator.creator_layout || creator.build_creator_layout
        updated_layout = params[:layout]

        if updated_layout.present?
          creator_layout.layout = updated_layout.map do |component|
            case component[:type]
            when 'image'
              if component[:image_id].present?
                image = Image.find_by(id: component[:image_id])
                if image
                  {
                    type: 'image',
                    image_id: image.id,
                    # Include any other necessary image data
                  }
                end
              end
            when 'rich_text'
              if component[:rich_text_id].present?
                rich_text = RichText.find_by(id: component[:rich_text_id])
                if rich_text
                  {
                    type: 'rich_text',
                    rich_text_id: rich_text.id,
                    # Include any other necessary rich text data
                  }
                end
              end
            when 'products'
              {
                type: 'products',
                products: nil
              }
            when 'product_component'
              if component[:product_id].present?
                product = Product.find_by(id: component[:product_id])
                if product
                  {
                    type: 'product_component',
                    product_id: product.id,
                    title: component[:title],
                    desc: component[:desc]
                    # Include any other necessary product component data
                  }
                end
              end
            else
              component
            end
          end.compact
        end

        if creator_layout.save
          render json: creator_layout
        else
          render json: creator_layout.errors, status: :unprocessable_entity
        end
      end
    end
  end
end