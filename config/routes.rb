Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]

    resources :movies, only: [:create, :show]
    resources :genres, only: [:create, :index]
  end

end