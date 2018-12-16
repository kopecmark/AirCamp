# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
  email: "demo@account.com",
  first_name: "Demo Person",
  last_name: "Demo Last Name",
  password: "demopassword",
  user_img_url: "google/imgs/profile.jpg"
})


listing1 = Listing.create({
  user_id: user1.id,
  title: 'Half Dome Summit',
  description: "Stay at the top of the world it doesn't get much better then that",
  pets_allowed: false,
  terrain: "Forest",
  price: 150,
  capacity: 2,
  category: 'glamping',
  lon: location_hash[5][0],
  lat: location_hash[5][1]
})