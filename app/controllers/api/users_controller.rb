class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      notebook = Notebook.create!(author_id: @user.id, title: "Notes")
      Note.create!(title: 'Your First Note', body: "<p>Welcome to Denote! Create notes, save them to notebooks, and access them anywhere.</p>
      <br/>
      <p>

      Created by <a href=\"http://bchachaj.com\">Ben Chachaj.</a></p>", author_id: current_user.id, notebook_id: notebook.id, archived: true);


    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end


end
