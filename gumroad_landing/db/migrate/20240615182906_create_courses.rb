class CreateCourses < ActiveRecord::Migration[7.2]
  def change
    create_table :courses do |t|
      t.string :courseImage
      t.string :authorAvi
      t.string :title
      t.integer :price
      t.integer :ratingVal
      t.integer :ratingAmt

      t.timestamps
    end
  end
end
