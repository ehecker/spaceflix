class ApplicationController < ActionController::Base
    # All other controllers are already receiving these functions because they inherit from Application Controller.
    # So why do I need to use helper_method here? Where does this make these functions available?
    helper_method :current_user, :logged_in?

    def logged_in?
        !!current_user
    end

    def login(user)
        @current_user = user
        session[:session_token] = user.reset_session_token
    end

    def logout
        current_user.reset_session_token
        session[:session_token] = nil
    end

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end
end
