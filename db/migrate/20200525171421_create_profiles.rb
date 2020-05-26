class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
    end
  end
end
