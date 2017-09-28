class RenameColumnInTaggings < ActiveRecord::Migration[5.0]
  def change
    rename_column :taggings, :tag_id, :tag_name
  end
end
