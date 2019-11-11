class AddIndexOnOrdInSteps < ActiveRecord::Migration[5.2]
  def change
    add_index :steps, [:ord, :recipe_id], unique: true
  end
end
