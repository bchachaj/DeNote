class Notebook < ApplicationRecord
  validates :title, :description, :author_id, presence: true
  belongs_to :user
  has_many :notes, through: :user, source: :notes

end
