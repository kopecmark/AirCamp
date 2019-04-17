class Api::BookingsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create    
    @booking = Booking.new(booking_params)
    @booking.user_id = current_user.id

    p @booking

    if @booking.save
      render json: @booking
    else 
      render json: @booking.errors.full_messages
    end
    
    
  end 

  def index  

    if params.has_key?(:listing_id)
      @bookings = Booking
                    .all
                    .where(listing_id: params[:listing_id])
    else
      @bookings = Booking
                    .all
                    .where(user_id: current_user.id)
    end
                
    if @bookings
      render json: @bookings
    else
      render json: @bookings.errors.full_messages
    end
  end 
  


  def destroy
   @booking = current_user.bookings.find((params[:id]))
   @booking.destroy
   render json: @booking.id
  end

  private
  def booking_params
    params.require(:booking).permit(
      :start_date, 
      :end_date, 
      :listing_id
    )
  end
end


