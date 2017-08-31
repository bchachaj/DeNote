class Api::TaggingController < ApplicationController

  def show
    @tagging = Tagging.find(params[:id])
  end

  def create
    @tagging - Tagging.new(t_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages, status: 422
    end

  end

  def destroy
    @tagging = Tagging.find_by(
      note_id: params[:tagging][:note_id],
      tag_id: params[:tagged_note][:tag_id]
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
    params.require(:taggings).permit(:tag_id, :note_id)
  end
end
