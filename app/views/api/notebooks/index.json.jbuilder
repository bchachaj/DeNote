@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :author_id, :title, :updated_at, :created_at
  end
end
