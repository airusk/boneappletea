export const createComment= (comment,recipe_id) => {
  return $.ajax({
    url: `/api/recipes/${recipe_id}/comments`,
    method: 'POST',
    data: { comment }
  });
};