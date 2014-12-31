class CreateListings < ActiveRecord::Migration
  def change
    create_table :listings do |t|
      t.boolean :active,          :default => true
      t.boolean :idx,             :default => true
      t.integer :price
      t.integer :bedrooms
      t.float   :baths            # searchable bath field - BathsTotal: 2, HalfBaths: 2 = 2.5 (2.5+ for the user)
      t.integer :age
      t.integer :sqft_max         # 2001 TO 2200 would be 2200 - shows searcher max homes

      t.hstore  :address_fields   # put show_address boolean here
      t.hstore  :extra            # raw bath data here for display - BathsTotal: 2, HalfBaths: 2
      t.hstore  :extraPremium
      t.hstore  :exclude

      t.datetime :mls_data_updated_at
      t.datetime :mls_photo_updated_at
      t.timestamps
    end

    add_index(:listings, :active)
    add_index(:listings, :idx)
    add_index(:listings, :price)
    add_index(:listings, :bedrooms)
    add_index(:listings, :baths)
    add_index(:listings, :age)
    add_index(:listings, :sqft_max)
  end
end
