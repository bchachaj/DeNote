@taggings.each do |tagging|
  json.set! tagging.id do
    json.extract! tagging, :id, :tag_id, :note_id
  end
end
