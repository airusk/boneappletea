class ChangeRatingInCommentsToInteger < ActiveRecord::Migration[5.2]
  def change
    remove_column :comments, :rating, :string
    add_column :comments, :rating, :integer, null: true
  end
end
