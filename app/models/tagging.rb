# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  recipe_id  :integer          not null
#  tag_id     :integer
#

class Tagging < ApplicationRecord
  validates :recipe_id, presence: true

  belongs_to :recipe
  belongs_to :tag

end
