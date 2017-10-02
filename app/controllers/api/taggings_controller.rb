class Api::TaggingsController < ApplicationController

  def show
    @tagging = Tagging.find(params[:id])
  end

  def index
    @taggings = Tagging.all
  end

  def create
    @tagging = Tagging.new(t_params)
    tag = Tag.find_by(name: @tagging.tag_name)
    if !tag
      Tag.create!(name: @tagging.tag_name, author_id: current_user.id)
    end
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end

  end

  def destroy
    @tagging = Tagging.find_by(
      note_id: params[:tagging][:note_id]
    )
    if @tagging
      @tagging.delete
      render :show
    else
      render json: @tagging.errors.full_messages
    end
  end

  private

  def t_params
    params.require(:tagging).permit(:tag_name, :note_id)
  end

end
