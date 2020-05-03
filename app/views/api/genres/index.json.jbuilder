@genres.each do |genre|
    json.extract! genre, :id, :name

    genre.movies.each do |movie|
        json.extract! movie, :id, :title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id
    end
end