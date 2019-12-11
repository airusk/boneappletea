class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def require_login
    render json: ["You must be logged in to leave a comment"] unless logged_in?
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    # user.reset_session_token
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end
end
