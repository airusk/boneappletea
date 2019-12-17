class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
  end

  def search
    @recipes = Recipe.search(params[:tag])
    # @recipes = Tagging.search(params[:tag])
    # @recipes = Recipe.ransack(title_cont: params[:q]).result(distinct: true).limit(5)
  end
  
  def show
    @recipe = Recipe.find(params[:id])
  end

  def recipe_params
    params.require(:recipe).permit(:tag)
  end
end