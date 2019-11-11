# == Schema Information
#
# Table name: ingredients
#
#  id         :integer          not null, primary key
#  text       :string           not null
#  recipe_id  :integer          not null
#  ord        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Ingredient < ApplicationRecord
  validates :text, :recipe_id, :ord, presence: true
  validates :ord, uniqueness: { scope: :recipe_id }
  belongs_to :recipe
end
