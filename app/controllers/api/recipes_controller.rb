class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.with_attached_image.includes(:comments).all
  end

  def search
    @recipes = Recipe.with_attached_image.includes(:comments).search(params[:tag])
  end
  
  def show
    @recipe = Recipe.includes(:steps, :ingredients, :comments).find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:tag)
  end
end