class Api::NotesController < ApplicationController

  def index
    @notes = Note.all.select { |note| note.author_id == current_user.id }
    @notes = @notes.sort_by(&:created_at)
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])

    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])

    if @note.destroy
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end
end
