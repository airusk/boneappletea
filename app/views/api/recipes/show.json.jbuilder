# json.partial! 'api/recipes/recipe', recipe: @recipe
json.recipe do
  json.set! @recipe.id do
    json.partial! 'recipe', recipe: @recipe
  end
end
json.ingredients do
  @recipe.ingredients.each do |ingredient|
    json.set! ingredient.id do
      json.partial! 'ingredient', ingredient: ingredient
    end
  end
end
json.steps do
  @recipe.steps.each do |step|
    json.set! step.id do
      json.partial! 'step', step: step
    end
  end
end
json.comments do
  @recipe.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end
end