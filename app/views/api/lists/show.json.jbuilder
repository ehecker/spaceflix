json.id @list.id

#json.movies @list.movies

json.movies @list.movies do |movie|
    json.extract! movie, :id, :title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id
    json.trailer movie.trailer.attached? ? url_for(movie.trailer) : "" 
    json.thumbnail movie.thumbnail.attached? ? url_for(movie.thumbnail) : ""
    json.logo movie.logo.attached? ? url_for(movie.logo) : ""
end


json.movie_associations @list.movie_associations