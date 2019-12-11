export const createComment= (comment,recipeId) => {
  return $.ajax({
    url: `/api/recipes/${recipeId}/comments`,
    method: 'POST',
    data: { comment }
  });
};