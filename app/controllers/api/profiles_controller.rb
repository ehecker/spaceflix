class Api::ProfilesController < ApplicationController

    def create
        @profile = Profile.new(profile_params)

        if @profile.save
            puts "profile created"
            render "/api/users/show"
        else
            puts "profile creation failed"
            render json: @profile.errors.full_messages, status: 422
        end
    end

    def destroy
        @profile = current_user.profiles.find_by(id: params[:id])

        if @profile && @profile.destroy
            puts "profile destroyed"
        else
            puts "destroy failed"
        end
    end

    def show
        @profiles = Profile.where(id: params[id])
    end

    private
    def profile_params
        params.require(:profile).permit(:name, :user_id)
    end

end