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

ActiveRecord::Schema.define(version: 20191218133707) do

  create_table "alarms", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "name"
    t.integer  "hour_id"
    t.integer  "minute_id"
    t.string   "music"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hour_id"], name: "index_alarms_on_hour_id", using: :btree
    t.index ["minute_id"], name: "index_alarms_on_minute_id", using: :btree
  end

  create_table "hours", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "minutes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.integer  "time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "alarms", "hours"
  add_foreign_key "alarms", "minutes"
end
