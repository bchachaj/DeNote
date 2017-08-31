class Tag < ApplicationRecord
  validates :name, presence: true

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'

  has_many :taggings

  has_many :notes, through: :taggings, source: :note
end
