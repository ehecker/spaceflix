# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  profile_id :integer          not null
#
class List < ApplicationRecord

    belongs_to :profile,
        foreign_key: :profile_id,
        class_name: :Profile
    
    has_many :movie_associations,
        foreign_key: :list_id,
        class_name: :ListMovie

    has_many :movies,
        through: :movie_associations,
        source: :movie

end
