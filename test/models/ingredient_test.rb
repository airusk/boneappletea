# == Schema Information
#
# Table name: ingredients
#
#  id         :bigint           not null, primary key
#  ord        :integer          not null
#  text       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :integer          not null
#
# Indexes
#
#  index_ingredients_on_ord_and_recipe_id  (ord,recipe_id) UNIQUE
#  index_ingredients_on_recipe_id          (recipe_id)
#

require 'test_helper'

class IngredientTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
