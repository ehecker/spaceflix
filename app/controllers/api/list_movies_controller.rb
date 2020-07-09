class Api::ListMoviesController < ApplicationController

    def create
        @list_movie = ListMovie.new(list_movie_params)

        listId = params[:list_movie][:list_id]
        @list = List.find(listId)

        if @list_movie && @list_movie.save!
            render '/api/lists/show'
        end
    end

    def destroy
        @list_movie = ListMovie.find(params[:id])

        if @list_movie
            list_id = @list_movie.list.id
            @list_movie.destroy

            @list = List.find(list_id)
            render '/api/lists/show'
        end
    end

    private
    def list_movie_params
        params.require(:list_movie).permit(:list_id, :movie_id)
    end
end
