class CreateRichTexts < ActiveRecord::Migration[7.2]
  def change
    create_table :rich_texts do |t|
      t.string :title
      t.text :description
      t.references :creator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
