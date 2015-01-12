class Listing < ActiveRecord::Base
  def self.rets_update
    newer_than = Listing.order(:updated_at).last.updated_at.strftime('%Y-%m-%dT%T')
    records = Mls.get_homes query: '(ModificationTimestamp=#{newer_than}+)'
    rets_process(records)
  end

  def self.rets_process(records)
    return unless records.present?
    mls = Mls.config[:listing]

    records.each do |record|
      listing = Listing.where(:ml => record[mls[:ml]]).first_or_initialize

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
      listing.send(:rets_address)
      listing.send(:rets_office, record)

      listing.save!
    end

    Listing.delete_all(active: false)
    FileUtils.rm(Rails.root.join('public', 'api', 'v1', 'listings.json').to_s)
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
      self.active = record['ListingStatus'] == 'Active'
    end

    def rets_sqft(record) # '1501 TO 1600', '5000 PLUS'
      self.ft = record['SqFtRange'].split(' TO ').last.to_i
    end

    def rets_baths(record)
      half = record['HalfBaths'].to_i > 0 ? '.5' : '.0'
      self.ba = "#{record['BathsTotal']}#{half}".to_f
    end

    def rets_office(record)
      self.extra['office_name'] = Office.where(:mls_id => record['ListingOfficeUID']).first.name
    end

    def rets_address
      a = self.address_fields
      self.ad = "#{a['StreetNumber']} #{a['StreetName']} #{a['City']} #{a['PostalCode']}".titlecase
    end

end
