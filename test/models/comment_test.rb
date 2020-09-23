# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  again      :boolean          default(TRUE)
#  anonymous  :boolean          default(TRUE)
#  body       :string
#  rating     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#  recipe_id  :integer          not null
#
# Indexes
#
#  index_comments_on_author_id  (author_id)
#  index_comments_on_recipe_id  (recipe_id)
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
