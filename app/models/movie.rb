# == Schema Information
#
# Table name: movies
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  year            :integer          not null
#  description     :text             not null
#  duration        :string           not null
#  maturity_rating :string
#  director        :string
#  cast            :string
#  genre_id        :integer
#
class Movie < ApplicationRecord

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre
        
    

end
