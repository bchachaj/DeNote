class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
      t.integer :notebook_id, null: false
      t.boolean :archived, null: false, default: false
      t.timestamps
    end

    add_index :notes, :author_id
    add_index :notes, :notebook_id
  end
end
