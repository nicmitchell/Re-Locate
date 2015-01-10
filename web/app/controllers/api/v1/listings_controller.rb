module Api
  module V1
    class ListingsController < ApplicationController
      def index
        @listings = Listing.select('id, price, beds, baths, year, sqft_max, address_fields, mls_num')
        render :json => @listings
      end
      def show
        @listings = Listing.find(params[:id])
        render :json => @listings
      end
    end
  end
end