class Tagging < ApplicationRecord
  validates :tag_name, :note_id, presence: true
  validates_uniqueness_of :tag_name, scope: :note_id

  belongs_to :note,
    primary_key: :id,
    foreign_key: :note_id,
    class_name: 'Note'


  belongs_to :tag,
    primary_key: :name,
    foreign_key: :tag_name,
    class_name: 'Tag',
    optional: true
end
