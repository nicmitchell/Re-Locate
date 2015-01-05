class ModifyListingFields < ActiveRecord::Migration
  def change
    rename_column :listings, :bedrooms, :beds
    rename_column :listings, :age, :year
    rename_column :listings, :extraPremium, :premium
    remove_column :listings, :idx
    add_column :listings, :mls_num, :string
    add_index :listings, :mls_num
  end
end
