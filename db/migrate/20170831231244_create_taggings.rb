class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end

    add_index :taggings, [:note_id, :tag_id]
  end
end
