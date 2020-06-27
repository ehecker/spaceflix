class Api::ProfilesController < ApplicationController

    def create
        @profile = Profile.new(profile_params)

        if @profile.save
            user_id = params[:profile][:user_id]

            @user = User.find(user_id)
            render "/api/profiles/show"
        else
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile = Profile.find(params[:id])

        if @profile && @profile.destroy
            user_id = @profile.user.id
            @profile.destroy

            @user = User.find(user_id)
            render "/api/profiles/destroy"
        end
    end

    private
    def profile_params
        params.require(:profile).permit(:name, :user_id)
    end

end