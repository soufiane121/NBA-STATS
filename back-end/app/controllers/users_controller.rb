class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def new
        @user = User.new
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        user = User.find_or_create_by(filtered_params)
        # byebug
        if user.valid?
            render json: user, status: :created
            # session[:user_id] = user.id
            # puts session[:user_id]
        else
            render json: { error: 'failed' }, status: :not_acceptable
        end
    end

    private


    def filtered_params
        
        params.require(:user).permit(:user_name, :password)
    end
  
end
