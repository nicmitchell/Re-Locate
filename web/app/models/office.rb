class Office < ActiveRecord::Base
  def self.rets_update
    newer_than = Office.order(:updated_at).last.updated_at.strftime('%Y-%m-%dT%T')
    records = Mls.get_offices query: '(ModificationTimestamp=#{newer_than}+)'
  end

  def self.rets_process(records)
    return unless records.present?

    records.each do |record|
      office = Office.where(:mls_id => record['OfficeUID']).first_or_initialize
      office.name = record['Name']
      office.mls_updated_at = record['ModificationTimestamp']
      office.active = record['OfficeStatus'] == '- Active'
      office.save!
    end

  end
end
