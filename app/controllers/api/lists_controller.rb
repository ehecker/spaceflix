class Api::ListsController < ApplicationController

    def create
        @list = List.new(list_params)

        if @list && @list.save!
            prof = Profile.find(params[:list][:profile_id])

            @user = prof.user
            render '/api/users/show'
        end
    end

    def show
        @list = List.find(params[:id])
        render '/api/lists/show'
    end

    private
    def list_params
        params.require(:list).permit(:profile_id)
    end
end