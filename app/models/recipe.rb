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
  has_one_attached :image
  has_many :comments


  def rating
    # Method to create recipe rating through comment ratings.
    total = 0;
    num_ratings = 0;
    self.comments.each do |comment|
      if comment.rating
        total += comment.rating
        num_ratings += 1
      end
    end
    total / num_ratings
  end

  def again
    make_again = 0;
    self.comments.each do |comment|
      make_again +=1 if comment.again
    end
    make_again / (self.comments.length) * 100
  end

end
