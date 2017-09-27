class Api::NotesController < ApplicationController

  def index
    @notes = Note.all.order(:updated_at)
    @notes = @notes.select { |note| note.author_id == current_user.id }
    @notes.sort_by(&:updated_at).reverse
  end

  def show
    @note = Note.find(params[:id])
  end

  def create
    @note = Note.new(note_params)
    @note.author_id = current_user.id

    if @note.save
      @note.archived = true
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    @note.archived = true
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
