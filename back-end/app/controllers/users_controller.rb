class UsersController < ApplicationController

    def new
        @user = User.new
    end

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def create
        @user = User.create(filtered_params)
        render json: @user
    end


    private


    def filtered_params
        params.require(:user).permit(:user_name, :password)
    end
  
end
