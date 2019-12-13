# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string
#  recipe_id  :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  again      :boolean          default("true")
#  rating     :integer
#  anonymous  :boolean          default("true")
#

class Comment < ApplicationRecord
  validate :content
  validates :author_id, :recipe_id, presence: true

  belongs_to :recipe
  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  def content
    if rating.blank? && body.blank?
      errors[:comment] << "You must rate or review this recipe"
    end
  end

  def date
    created_at.strftime("%m/%d/%Y")
  end

  def author
    self.anonymous ? "Anonymous" : self.user.name
  end

  def fix_rating
    self.rating = nil if !(self.rating > 0 && self.rating < 5)
  end

end
