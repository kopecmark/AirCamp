```javascript 

user = {
  email: "test@gmail.com",
  first_name: "First",
  last_name: "Last",
  password: "badpasswordchoice",
  user_img_url: "google/imgs/profile.jpg",

}

user = {
  email: "test@gmail.com",
  password: "badpasswordchoice",
}

listing = {
  user_id: 3,
  site_title: 'Some awesome title',
  description: "Something insperational",
  daily_cost: 100000,
  check_in_time: "4:00 pm",
  check_out_time: "11:00 am",
  capacity: 4,
  lng: 873645983274.45334,
  lat: 34523453425.6
}
dispatch(fetchListings()).then(console.log)

```