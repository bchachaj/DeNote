class Api::TagsController < ApplicationController
  def index
    @tags = Tag.where(author_id: current_user.id)
  end

  def create
    @tag = Tag.new(t_params)
    @tag.author_id = current_user.id
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end

  end

  # update

  def destroy
    @tag = Tag.find_by(id: params[:id])
    taggings = Tagging.where(tag_name: @tag.name)
    if @tag.delete
      taggings.destroy_all
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def show
    @tag = Tag.find(params[:id])
  end

  private

  def t_params
    params.require(:tag).permit(:name, :author_id)
  end

end
