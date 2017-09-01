class Tagging < ApplicationRecord
  validates :tag_id, :note_id, presence: true
  validates_uniqueness_of :tag_id, scope: :note_id

  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Note'


  belongs_to :tag,
    primary_key: :id,
    foreign_key: :tag_id,
    class_name: 'Tag'
end
