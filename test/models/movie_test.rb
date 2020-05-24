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
require 'test_helper'

class MovieTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
