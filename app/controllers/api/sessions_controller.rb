class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login(@user)

            # Do I actually need this? Will I even have a users show page?
            render '/api/users/show'
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy 
        @user = current_user

        if @user
            logout

            # Same ? as above
            # render "api/users/show"
            
            render json: {}
        else
            render json: ["Nobody is logged in"], status: 404
        end
    end

end
