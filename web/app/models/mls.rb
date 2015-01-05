require 'rets'

class Mls
  class << self # make everything a class method without self.method_name
    def config
      YAML.load(File.read(File.join(Rails.root, 'config/mls.yml')))
    end

    def client
      Rets::Client.new({
        login_url: 'http://rets.offutt-innovia.com:6103/fay/login',
        username: ENV["RETS_USERNAME"],
        password: ENV["RETS_PASSWORD"],
        version: 'RETS/1.8'
      })
    end

    def refresh
      Office.rets_update
      Listing.rets_update
    end

    def get(opts)
      unless opts[:search_type] && opts[:class]
        raise ArgumentError, 'opts[:search_type] && opts[:class] are required'
      end

      api = client
      begin
        api.login
      rescue => e
        puts 'Error: ' + e.message
        exit!
      end

      defaults = {format: 'COMPACT-DECODED'}
      results = api.find(:all, defaults.merge(opts)) # opts overwrite defaults

      api.logout
      results
    end

    def get_homes(opts = {})
      defaults = {search_type: 'Property', class: 'ResidentialProperty'}
      get(defaults.merge(opts)) # opts overwrite defaults
    end

    def get_offices(opts = {})
      defaults = {search_type: 'Office', class: 'Office'}
      get(defaults.merge(opts)) # opts overwrite defaults
    end

  end # class << self
end
