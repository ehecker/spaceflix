class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)

        if @list && @list.save!
            puts "LOG: List created"
            render json: {}
        else
            puts "LOG: List creation failed"
        end
    end

    # def destroy

    # end

    private
    def list_params
        debugger
        params.require(:list).permit(:profile_id)
    end

end
