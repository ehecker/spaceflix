class Api::GenresController < ApplicationController

    def index

    end

    def create
        @genre = Genre.new(genre_params)

        if @genre.save

        else

        end
    end

    private
    def genre_params
        params.require(:genre).permit(:name)
    end

end