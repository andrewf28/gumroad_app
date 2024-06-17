class CreateLandingPages < ActiveRecord::Migration[7.2]
  def change
    create_table :landing_pages do |t|
      t.text :structure
      t.references :creator, null: false, foreign_key: true

      t.timestamps
    end
  end
end
