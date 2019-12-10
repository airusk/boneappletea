class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :rating, null: false
      t.string :body
      t.integer :recipe_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    
    add_index :comments, :recipe_id
    add_index :comments, :author_id
  end
end
