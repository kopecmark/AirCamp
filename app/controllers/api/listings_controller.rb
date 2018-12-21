class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
  end
  
  def show
    @listing = Listing.with_attached_photos.find(params[:id])
  
  end

  private
  def listing_params
    params.require(:listing).permit(
      :site_title,
      :description,
      :daily_cost,
      :check_in_time,
      :check_out_time,
      :capacity, 
      
    )
  end
  
end