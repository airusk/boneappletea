class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :text, null: false
      t.integer :recipe_id, null: false
      t.integer :ord, null: false
      t.timestamps
    end
    
    add_index :ingredients, :recipe_id
  end
end
