# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Listing.delete_all
User.delete_all

user1 = User.create({
  email: "demo@account.com",
  first_name: "Demo Person",
  last_name: "Demo Last Name",
  password: "demopassword",
  user_img_url: "google/imgs/profile.jpg"
})


listing1 = Listing.create({
  user_id: user1.id,
  site_title: 'Half Dome Summit',
  description: "Stay at the top of the world it doesn't get much better then that",
  daily_cost: 50,
  check_in_time: "4:00 pm",
  check_out_time: "11:00 am",
  capacity: 4,
  lng: 345345345.4,
  lat: 345345345.6
})
