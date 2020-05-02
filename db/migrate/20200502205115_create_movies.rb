class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false, unique: true
      t.integer :year, null: false
      t.text :description, null: false
      t.string :duration, null: false
      t.string :maturity_rating
      t.string :director
      t.string :cast
      t.integer :genre_id

    end
  end
end