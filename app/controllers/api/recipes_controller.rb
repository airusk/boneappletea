class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def search
    @recipes = Recipe.with_attached_image.search(params[:tag])
  end
  
  def show
    @recipe = Recipe.includes(:steps, :ingredients, :comments).find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:tag)
  end
end