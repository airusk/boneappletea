# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  recipe_id  :integer          not null
#  tag_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :recipe_id, presence: true

  belongs_to :recipe
  belongs_to :tag

end
