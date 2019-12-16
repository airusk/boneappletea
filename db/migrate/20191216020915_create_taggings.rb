class CreateTaggings < ActiveRecord::Migration[5.2]
  def change
    create_table :taggings do |t|
      t.integer :recipe_id, null: false
      t.integer :tag_id
      t.timestamps
    end
  end
end
