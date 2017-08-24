class Api::NotesController < ApplicationController
  def new
  end

  def create
  end

  def update
  end

  def destroy
  end

  def index
  end

  private

  def note_params
    params.permit(:note).require(:title, :body)
  end


end
