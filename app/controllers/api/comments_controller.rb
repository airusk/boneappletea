class Api::CommentsController < ApplicationController
  before_action :require_login
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 418
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:rating, :body, :again, :recipe_id, :anonymous)
  end
end
