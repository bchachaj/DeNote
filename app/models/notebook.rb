class Notebook < ApplicationRecord
  validates :title, :author_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :notes, through: :user, source: :notes

end
