module Api
  module V1
    class ListingsController < ApplicationController
      def index
        @listings = Listing.paginate(:page => params[:page], :per_page => 100)
        render :json => @listings
      end
    end
  end
end