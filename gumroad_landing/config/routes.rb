Rails.application.routes.draw do
  resources :products
  resources :creators
  #API routes should be in api/v1
  namespace :api do
    namespace :v1 do
      resources :courses
    end
  end
end