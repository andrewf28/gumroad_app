class CreateProducts < ActiveRecord::Migration[7.2]
  def change
    create_table :products do |t|
      t.string :title
      t.decimal :price
      t.decimal :rating
      t.integer :ratingAmt
      t.string :image

      t.timestamps
    end
  end
end
