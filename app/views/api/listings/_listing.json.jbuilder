json.extract! listing, :id, :site_title, :daily_cost, :check_in_time, 
:check_out_time, :capacity, :lat, :lng, :description, :user_id

json.photoUrls listing.photos.map { |file| url_for(file) }