class AddCreatorToProducts < ActiveRecord::Migration[7.2]
  def change
    add_reference :products, :creator, null: false, foreign_key: true
  end
end
