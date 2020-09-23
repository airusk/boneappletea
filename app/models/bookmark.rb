# == Schema Information
#
# Table name: bookmarks
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :integer          not null
#  user_id    :integer          not null
#
class Bookmark < ApplicationRecord
  validates :recipe_id, presence: true
  validates :user_id, presence: true

  belongs_to :recipe
  belongs_to :user

  def date
    created_at.strftime("%m/%d/%Y")
  end
end
