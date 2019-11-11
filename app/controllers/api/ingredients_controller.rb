class Api::IngredientsController < ApplicationController
  def index
    @ingredients = Ingredient.all
  end
end
