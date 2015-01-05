class CreateOffices < ActiveRecord::Migration
  def change
    create_table :offices do |t|
      t.string :name
      t.string :mls_id
      t.boolean :active, :default => true
      t.datetime :mls_updated_at

      t.timestamps
    end

    add_index(:offices, :mls_id)
  end
end
