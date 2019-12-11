class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)

    if !!current_user
       @comment.author_id = current_user.id
       if @comment.save
        render :show
       else
        render json: [@comment.errors.full_messages], status: 418
       end
    else
      render json: ["You must be logged in to leave a comment"], status: 404
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:rating, :body, :again, :recipe_id)
  end
end
