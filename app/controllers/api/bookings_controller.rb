class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create    
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id

    if @booking.save
      render json: @booking
    else 
      render json: @booking.errors.full_messages
    end
    
    
  end 

  def index   
    @bookings = Booking.all

    if @bookings
      render json: @bookings
    else
      render json: @bookings.errors.full_messages
    end
  end 
  
  # def show 
  #   @booking = Booking.find(params[:id])
  # end

  private
  def booking_params
    params.require(:booking).permit(
      :start_date, 
      :end_date, 
      :listing_id
    )
  end
end


