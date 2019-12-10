class AddAnonymousToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :anonymous, :boolean, default: false
  end
end
