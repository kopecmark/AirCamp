class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :user_id, null: false
      t.string :site_title, null: false
      t.text :description, null: false
      t.float :daily_cost, null: false
      t.string :check_in_time, null: false
      t.string :check_out_time, null: false
      t.integer :capacity, null: false
      t.float :lng, null: false
      t.float :lat, null: false
      t.timestamps
    end
    add_index :listings, :user_id
    add_index :listings, :site_title, unique: true

  end
end
