class CreateSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :body, null: false
      t.integer :recipe_id, null: false
      t.integer :ord, null: false

      t.timestamps
    end

    add_index :steps, :recipe_id
  end
end
