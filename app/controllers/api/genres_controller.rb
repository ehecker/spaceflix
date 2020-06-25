class Api::GenresController < ApplicationController

    def index
        @genres = Genre.all

        render :index
    end

    def show

    end

    private
    def genre_params
        params.require(:genre).permit(:name)
    end

end