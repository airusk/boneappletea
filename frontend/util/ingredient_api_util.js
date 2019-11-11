export const fetchIngredients = () => (
  $.ajax({
    url: 'api/ingredients',
    method: 'GET'
  })
)