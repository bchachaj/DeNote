class ChangeColTypeInTaggings < ActiveRecord::Migration[5.0]
  def change
    change_column :taggings, :tag_name, :string
  end
end
