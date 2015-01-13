module Api
  module V1
    class ListingsController < ApplicationController
      def index
        # need as_json to remove :id
        render json: Listing.select('ml, pr, bd, ba, yr, ft, ad').as_json(only: [:ml, :pr, :bd, :ba, :yr, :ft, :ad])
      end

      def show
        render :json => Listing.find_by(ml: (params[:id]))
      end

    end
  end
end
