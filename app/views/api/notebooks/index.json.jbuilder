@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :author_id, :title, :description, :updated_at, :created_at
  end
end
