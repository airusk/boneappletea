class ChangeRatingInComments < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :rating, :string, null: true
  end
end
