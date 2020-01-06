Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :recipes, only: [:index, :show] do
      resources :comments, only: [:create]
    end
    get :search, controller: :recipes 
    resources :ingredients, only: [:index]
    resources :steps, only: [:index]
  end
end
