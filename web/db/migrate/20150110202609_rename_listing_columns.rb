class RenameListingColumns < ActiveRecord::Migration
  def change
    remove_index(:listings, :active)
    remove_index(:listings, :price)
    remove_index(:listings, :beds)
    remove_index(:listings, :baths)
    remove_index(:listings, :year)
    remove_index(:listings, :sqft_max)

    rename_column :listings, :price, :pr
    rename_column :listings, :beds, :bd
    rename_column :listings, :baths, :ba
    rename_column :listings, :year, :yr
    rename_column :listings, :sqft_max, :ft
    rename_column :listings, :mls_num, :ml

    add_column :listings, :ad, :string
  end
end
