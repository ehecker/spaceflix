class Genre < ApplicationRecord

    has_many :movies,
        foreign_key: :genre_id,
        class_name: :Movie

end