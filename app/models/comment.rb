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

class Comment < ApplicationRecord
  validate :content
  validates :rating, inclusion: { in: [1,2,3,4,5,nil] }
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
end
