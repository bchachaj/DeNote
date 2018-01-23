class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.all.select { |notebook| notebook.author_id == current_user.id }
    @notebooks = @notebooks.sort_by(&:updated_at)
    @notebooks.reverse
  end

  def show
    @notebook = Notebook.find(params[:id])
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id
    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    if @notebook.delete
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end

  end

  private

  def notebook_params
    params.require(:notebook).permit(:title)
  end


end
