Rails.application.routes.draw do
  root "alarms#index"
  resources :alarms, only: [:new, :index, :create, :edit, :update, :destroy]
end
