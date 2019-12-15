json.extract! recipe, :id, :title, :body, :user_id, :comments, :rating, :num_ratings
if recipe.image.attached?
  json.imageUrl url_for(recipe.image)
end