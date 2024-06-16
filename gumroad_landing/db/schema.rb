# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_06_16_031708) do
  create_table "creators", force: :cascade do |t|
    t.string "name"
    t.decimal "rating"
    t.integer "ratingAmt"
    t.string "pfp"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "image_url"
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_images_on_creator_id"
  end

  create_table "landing_pages", force: :cascade do |t|
    t.text "structure"
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_landing_pages_on_creator_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "title"
    t.decimal "price"
    t.decimal "rating"
    t.integer "ratingAmt"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "creator_id", null: false
    t.index ["creator_id"], name: "index_products_on_creator_id"
  end

  create_table "rich_texts", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.integer "creator_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_rich_texts_on_creator_id"
  end

  add_foreign_key "images", "creators"
  add_foreign_key "landing_pages", "creators"
  add_foreign_key "products", "creators"
  add_foreign_key "rich_texts", "creators"
end
