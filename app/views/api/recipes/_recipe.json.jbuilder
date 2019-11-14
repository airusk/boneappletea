json.extract! recipe, :id, :title, :body, :user_id
if recipe.image.attached?
  json.imageUrl url_for(recipe.image)
end