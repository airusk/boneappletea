class ChangeDefaultValueOfAnonymousInComments < ActiveRecord::Migration[5.2]
  def change
    change_column :comments, :anonymous, :boolean, default: true
  end
end
