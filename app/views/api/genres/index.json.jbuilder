@genres.each do |genre|
    json.key_format! ->(key){ key[0].upcase + key.slice(1..-1) }
    json.set! genre.name do 
        genre.movies.each do |movie|
            json.key_format! ->(key){ key }
            json.set! movie.title do
                json.extract! movie, :id, :title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id
            end
        end
    end
end