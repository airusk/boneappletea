class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
  end

  private
  def comment_params
    params.require(:comment).permit(:rating, :body, :again, :recipe_id)
  end
end
