# == Schema Information
#
# Table name: steps
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  recipe_id  :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Step < ApplicationRecord
  validates :body, :recipe_id, :ord, presence: true
  validates :ord, uniqueness: { scope: :recipe_id }

  belongs_to :recipe
  has_one_attached :image
end
