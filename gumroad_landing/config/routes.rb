Rails.application.routes.draw do
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
      resources :creators do
        resources :products, only: [:index]
      end
    end
  end
end