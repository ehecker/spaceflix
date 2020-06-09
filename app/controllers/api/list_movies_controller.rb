class Api::ListMoviesController < ApplicationController

    def create

    end

    def destroy

    end

    private
    def list_movie_params
        params.require(:list_movie).permit(:list_id, :movie_id)
    end
end
