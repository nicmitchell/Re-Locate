module Api
  module V1
    class ListingsController < ApplicationController
      def index
        @listings = Listing.select('price, beds, baths, year, sqft_max, address_fields, extra, premium, mls_num').paginate(:page => params[:page], :per_page => 200)
        render :json => @listings
      end
    end
  end
end