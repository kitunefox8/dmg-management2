class UsersController < ApplicationController
  def index
  end

  def new
  end

  def create
  end

  def show
    @nickname = current_user.nickname
  end
end
