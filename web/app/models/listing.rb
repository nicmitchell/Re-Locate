class Listing < ActiveRecord::Base
  def self.rets_process(records)
    mls = Mls.config[:listing]

    records.each do |record|
      listing = Listing.where(:mls_num => record[mls[:mls_num]]).first_or_initialize

      mls.each do |key, val|
        if key == :modify
          val.each { |field| listing.send(field, record) }
        else
          if val.kind_of? Array
            listing.send(:rets_group, key, val, record)
          else
            listing[key] = record[val]
          end
        end
      end

      listing.save!
    end

    Listing.delete_all(active: false)
  end

  private
    def rets_group(key, val, record)
      group = {}
      val.each do |field|
        group[field] = record[field]
      end
      self[key] = group
    end

    def rets_active(record)
      self.active = record['ListingStatus'] == "Active"
    end

    def rets_sqft(record) # '1501 TO 1600', '5000 PLUS'
      self.sqft_max = record['SqFtRange'].split(' TO ').last.to_i
    end

    def rets_baths(record)
      half = record['HalfBaths'].to_i > 0 ? '.5' : '.0'
      self.baths = "#{record['BathsTotal']}#{half}".to_f
    end

end
