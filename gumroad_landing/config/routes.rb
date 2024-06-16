Rails.application.routes.draw do
  resources :creator_layouts
  resources :landing_pages
  resources :rich_texts
  resources :images
  resources :creators do
    resources :products, only: [:index]
  end
  resources :products

  # API routes should be in api/v1
  namespace :api do
    namespace :v1 do
      resources :rich_texts
      resources :images
      resources :creators do
        resources :products, only: [:index]
        resource :creator_layout, only: [:show]
        resources :images, only: [:index]
        resources :rich_texts, only: [:index]
      end

      # Endpoint for viewing routes information
      get '/routes', to: 'application#routes_info'
    end
  end
end