class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # response.headers['X-Frame-Options'] = 'ALLOWALL'
end
