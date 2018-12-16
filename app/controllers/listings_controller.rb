class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render :index
  end
end
