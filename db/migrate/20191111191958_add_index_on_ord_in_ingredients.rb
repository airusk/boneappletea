class AddIndexOnOrdInIngredients < ActiveRecord::Migration[5.2]
  def change
    add_index :ingredients, [:ord, :recipe_id], unique: true
  end
end
