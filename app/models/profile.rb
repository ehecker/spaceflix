# == Schema Information
#
# Table name: profiles
#
#  id      :bigint           not null, primary key
#  name    :string           not null
#  user_id :integer          not null
#

class Profile < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    has_one :list, dependent: :destroy,
        foreign_key: :profile_id,
        class_name: :List

end