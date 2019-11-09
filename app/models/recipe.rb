# == Schema Information
#
# Table name: recipes
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Recipe < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  
  belongs_to :user
  has_many :ingredients
  has_many :steps

  def rating
    # Method to create recipe rating through comment ratings.
  end
end
