class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :user_id, null: false
      t.datetime :start_date, null: false
      t.string :start_date, null: false
      t.string :end_date, null: false
      
      t.timestamps
    end
    add_index :bookings, :user_id
    add_index :bookings, :listing_id
  end
end
