Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :notes, except: [:new, :edit]
    resources :notebooks
    resources :tags, only: [:index, :create, :show, :destroy, :update], param: :name do
      resources :notes, only: [:index]
    end
    resources :taggings, only: [:create, :destroy], param: :tag_name
    resource :session, only: [:new, :create, :destroy]
  end
end
