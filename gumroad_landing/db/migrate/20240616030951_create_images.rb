class CreateImages < ActiveRecord::Migration[7.2]
  def change
    create_table :images do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.references :creator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
