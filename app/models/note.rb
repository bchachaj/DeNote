class Note < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :user
  belongs_to :notebook

end
