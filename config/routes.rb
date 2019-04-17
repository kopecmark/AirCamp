Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :listings, only: [:index, :show] do
      resources :bookings, only: [:index]
    end
    resources :bookings, only: [:index, :show, :create, :update, :edit, :destroy]
  end

  root to: "static_pages#root"
end
