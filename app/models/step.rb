# == Schema Information
#
# Table name: steps
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :integer          not null
#
# Indexes
#
#  index_steps_on_ord_and_recipe_id  (ord,recipe_id) UNIQUE
#  index_steps_on_recipe_id          (recipe_id)
#

class Step < ApplicationRecord
  validates :body, :recipe_id, :ord, presence: true
  validates :ord, uniqueness: { scope: :recipe_id }

  belongs_to :recipe
  has_one_attached :image
end
