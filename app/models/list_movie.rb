# == Schema Information
#
# Table name: list_movies
#
#  id       :bigint           not null, primary key
#  list_id  :integer          not null
#  movie_id :integer          not null
#
class ListMovie < ApplicationRecord

    belongs_to :list,
        foreign_key: :list_id,
        class_name: :List

    belongs_to :movie,
        foreign_key: :movie_id,
        class_name: :Movie

end