class Api::GenresController < ApplicationController

    def index

    end

    def show

    end

    private
    def genre_params
        params.require(:genre).permit(:name)
    end

end