Rails.application.routes.draw do
  get 'statuses/index'
  get 'statuses/show'
  get 'statuses/new'
  get 'statuses/create'
  get 'statuses/edit'
  get 'statuses/update'
  get 'statuses/destroy'
  # get 'users/index'
  # get 'users/new'
  # get 'users/create'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "characters#index"
    resources :characters, onry: [:index, :new, :create, :show, :edit, :update, :destroy]
end
