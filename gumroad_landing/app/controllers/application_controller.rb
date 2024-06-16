class ApplicationController < ActionController::Base
    def routes_info
      routes = Rails.application.routes.routes.map do |route|
        {
          verb: route.verb,
          path: route.path.spec.to_s,
          controller: route.defaults[:controller],
          action: route.defaults[:action]
        }
      end
  
      render json: routes
    end
  end