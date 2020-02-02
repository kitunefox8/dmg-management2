class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def show
    @nickname = current_user.nickname
    @characters = Character.where(user_id: current_user.id).order("created_at DESC")
  end
end
