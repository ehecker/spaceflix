class Api::MoviesController < ApplicationController

    def index

    end

    def show

    end

    private
    def movie_params
        # debugger
        params.require(:movie).permit(:title, :description, :year, :duration, :maturity_rating, :director, :cast, :genre_id, :trailer, :thumbnail, :logo)
    end
end