@genres.each do |genre|
    json.set! genre.name do 
        genre.movies.each do |movie|
            json.set! movie.title do
                json.extract! movie, :id, :title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id
            end
        end
    end
end