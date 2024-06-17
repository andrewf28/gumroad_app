class CreateProductComponents < ActiveRecord::Migration[7.2]
  def change
    create_table :product_components do |t|
      t.integer :product_id
      t.string :title
      t.string :desc

      t.timestamps
    end
  end
end
