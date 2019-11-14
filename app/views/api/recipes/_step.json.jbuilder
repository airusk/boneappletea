json.extract! step, :id, :body, :recipe_id, :ord
if step.image.attached?
  json.imageUrl url_for(step.image)
end