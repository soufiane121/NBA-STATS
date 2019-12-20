Rails.application.routes.draw do
  # get 'users/Joins'
  # get 'users/Teams'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :teams 
  resources :users
  resources :joins
end
