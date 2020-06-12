class Api::ListMoviesController < ApplicationController

    def create
        @list_movie = ListMovie.new(list_movie_params)

        if @list_movie && @list_movie.save!
            render json: {}
        else
            puts "listmovie creation failed"
        end
    end

    def destroy

    end

    private
    def list_movie_params
        params.require(:list_movie).permit(:list_id, :movie_id)
    end
end
