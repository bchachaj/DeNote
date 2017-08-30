class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all
  end

  def show
    @notebook = Notebook.find(params[:id])
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    # @notebook = current_user.notebooks.new(notebook_params)
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Note.find(params[:id])

    if @notebook.destroy
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :description)
  end


end
