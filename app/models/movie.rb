class Movie < ApplicationRecord

    belongs_to :genre,
        foreign_key: :genre_id,
        class_name: :Genre
        
    

end