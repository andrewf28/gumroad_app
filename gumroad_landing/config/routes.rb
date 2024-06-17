Rails.application.routes.draw do
  resources :creator_layouts
  resources :landing_pages
  resources :rich_texts
  resources :images
  resources :creators do
    resources :products, only: [:index]
  end
  resources :products

  namespace :api do
    namespace :v1 do
      resources :rich_texts
      resources :images    # Add :create action
      resources :creators do
        resources :products, only: [:index]
        resource :creator_layout, only: [:show]
        resources :images, only: [:index, :create]  # Add :create action
        resources :rich_texts, only: [:index]
      end

      get '/routes', to: 'application#routes_info'
    end
  end
end