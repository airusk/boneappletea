export const fetchPayload = () => (
  $.ajax({
    url: 'api/recipes',
    method: 'GET'
  })
);

export const fetchRecipe = recipeId => (
  $.ajax({
    url: `api/recipes/${recipeId}`,
    method: 'GET'
  })
);

export const fetchSearch = tag => (
  $.ajax({
    url: `api/search?tag=${tag}`,
    method: 'GET'
  })
);