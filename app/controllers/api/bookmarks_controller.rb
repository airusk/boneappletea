class Api::BookmarksController < ApplicationController
  before_action :require_login

  def create
    @bookmark = Bookmark.new(bookmark_params)
    #insert name here if db changes @bookmark.name = recipe.id
    if @bookmark.save
      render :show
    else
      render json: @bookmark.errors.full_messages, status: 418
    end
  end

  end
  private
  def bookmark_params
    params.require(:bookmark).permit(:recipe_id);
  end
end
