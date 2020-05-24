# == Schema Information
#
# Table name: genres
#
#  id   :bigint           not null, primary key
#  name :string           not null
#
class Genre < ApplicationRecord

    has_many :movies,
        foreign_key: :genre_id,
        class_name: :Movie

end
