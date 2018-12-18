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

listing2 = Listing.create({
  user_id: user1.id,
  site_title: 'Pescadero State Beach',
  description: "You'll be right on the pacific ocean, watch the stars and the ocean at the same time",
  daily_cost: 60,
  check_in_time: "3:00 pm",
  check_out_time: "12:00 am",
  capacity: 6,
  lng: 345345345.4,
  lat: 345345345.6
})

listing3 = Listing.create({
  user_id: user1.id,
  site_title: 'Rob Hill Campground',
  description: "Stay at the top of the world it doesn't get much better then that",
  daily_cost: 90,
  check_in_time: "2:00 pm",
  check_out_time: "10:00 am",
  capacity: 4,
  lng: 345345345.4,
  lat: 345345345.6
})

listing4 = Listing.create({
  user_id: user1.id,
  site_title: 'Angel Island Campground',
  description: "Find serenity and adventure just a quick jaunt from San Francisco with a night of camping at Angel Island State Park. Begin your Angel Island camping adventure by catching a ferry ride from Tiburon or Pier 41",
  daily_cost: 45,
  check_in_time: "3:00 pm",
  check_out_time: "11:00 am",
  capacity: 8,
  lng: 345345345.4,
  lat: 345345345.6
})


listing1.photos.attach(io: File.open('app/assets/images/campsite_photos/campsite01-01.jpg'), filename: 'campsite01-01.jpg')
listing2.photos.attach(io: File.open('app/assets/images/campsite_photos/campsite02-01.jpg'), filename: 'campsite02-01.jpg')
listing3.photos.attach(io: File.open('app/assets/images/campsite_photos/campsite03-01.jpg'), filename: 'campsite03-01.jpg')
listing4.photos.attach(io: File.open('app/assets/images/campsite_photos/campsite04-01.jpg'), filename: 'campsite04-01.jpg')