class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid Credentials"], status: 422
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      render json: "{}"
    else
      render json: ["Nobody signed in"], status: 401
    end
  end

end
