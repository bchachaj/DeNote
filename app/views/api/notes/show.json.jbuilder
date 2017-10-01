json.extract! @note, :id, :title, :body, :author_id, :notebook_id, :created_at, :updated_at, :archived

json.tags do
  json.array! @note.tags.pluck(:name)
end
