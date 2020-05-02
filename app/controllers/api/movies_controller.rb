class Api::MoviesController < ApplicationController

    def create
        @movie = Movie.new(movie_params)

        if @movie.save
            
        else
            
        end

    end

    def show

    end

    private
    def movie_params
        params.require(:movie).permit(:title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id)
    end
end