Rails.application.routes.draw do
  devise_for :users
  get 'users/:id', to: 'users#show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "characters#index"
    resources :characters, onry: [:index, :new, :create, :show, :edit, :update, :destroy]
    resources :statuses, onry: [:index, :new, :create]
end