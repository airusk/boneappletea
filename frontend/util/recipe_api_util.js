// export const fetchRecipes = () => (
//   $.ajax({
//     url: 'api/recipes',
//     method: 'GET'
//   })
// )
// 
// 


export const fetchPayload = () => (
  $.ajax({
    url: 'api/recipes'
  })
);

export const fetchRecipe = recipeId => (
  $.ajax({
    url: `api/recipes/${recipeId}`,
    method: 'GET'
  })
);