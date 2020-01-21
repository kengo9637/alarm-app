class CreateAlarms < ActiveRecord::Migration[5.0]
  def change
    create_table :alarms do |t|
      t.string :name
      t.references :hour, foreign_key: true
      t.references :minute, foreign_key: true
      t.string :music
      t.timestamps
    end
  end
end
