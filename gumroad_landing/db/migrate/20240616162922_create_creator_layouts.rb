class CreateCreatorLayouts < ActiveRecord::Migration[7.2]
  def change
    create_table :creator_layouts do |t|
      t.references :creator, null: false, foreign_key: true
      t.json :layout

      t.timestamps
    end
  end
end
