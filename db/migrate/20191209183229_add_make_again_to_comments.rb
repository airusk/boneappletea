class AddMakeAgainToComments < ActiveRecord::Migration[5.2]
  def change
     change_column :comments, :rating, :string
     add_column :comments, :again, :boolean, default: true
  end
end
