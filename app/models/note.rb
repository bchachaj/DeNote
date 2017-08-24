class Note < ApplicationRecord
  validates :title, :body, :author_id, presence: true


end
