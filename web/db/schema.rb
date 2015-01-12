# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150110202609) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "hstore"

  create_table "listings", force: true do |t|
    t.boolean  "active",               default: true
    t.integer  "pr"
    t.integer  "bd"
    t.float    "ba"
    t.integer  "yr"
    t.integer  "ft"
    t.hstore   "address_fields"
    t.hstore   "extra"
    t.hstore   "premium"
    t.hstore   "exclude"
    t.datetime "mls_data_updated_at"
    t.datetime "mls_photo_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "ml"
    t.string   "ad"
  end

  add_index "listings", ["ml"], name: "index_listings_on_ml", using: :btree

  create_table "offices", force: true do |t|
    t.string   "name"
    t.string   "mls_id"
    t.boolean  "active",         default: true
    t.datetime "mls_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "offices", ["mls_id"], name: "index_offices_on_mls_id", using: :btree

  create_table "widgets", force: true do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "stock"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
