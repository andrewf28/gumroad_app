class CreateCreators < ActiveRecord::Migration[7.2]
  def change
    create_table :creators do |t|
      t.string :name
      t.decimal :rating
      t.integer :ratingAmt
      t.string :pfp

      t.timestamps
    end
  end
end
