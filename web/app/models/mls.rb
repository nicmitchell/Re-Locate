require 'rets'

class Mls
  class << self # make everything a class method without self.method_name
    def client
      Rets::Client.new({
        login_url: 'http://rets.offutt-innovia.com:6103/fay/login',
        username: ENV["RETS_USERNAME"],
        password: ENV["RETS_PASSWORD"],
        version: 'RETS/1.7'
      })
    end

    def get(opts)
      unless opts[:search_type] && opts[:class]
        raise ArgumentError, 'opts[:search_type] && opts[:class] are required'
      end

      api = client
      api.login

      defaults = {format: 'COMPACT-DECODED'}
      results = api.find(:all, defaults.merge(opts)) # opts overwrite defaults

      api.logout
      results
    end

    def get_homes(opts = {})
      defaults = {search_type: 'Property', class: 'ResidentialProperty', query: '(ListingStatus=A)'}
      get(defaults.merge(opts)) # opts overwrite defaults
    end

    def get_offices(opts = {})
      defaults = {search_type: 'Office', class: 'Office'}
      get(defaults.merge(opts)) # opts overwrite defaults
    end

  end # class << self
end
