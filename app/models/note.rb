class Note < ApplicationRecord
  validates :title, :body, :author_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  belongs_to :notebook
  has_many :taggings,
    dependent: :destroy,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Tagging'
  has_many :tags, through: :taggings, source: :tag
end
