class CharactersController < ApplicationController
  # before_action :set_params, only: [:index, :show]
  before_action :move_to_index, except: [:show, :index]


  def index
    # @characters = Character.where(params[:id]).order("created_at DESC")
    # @characters = Character.where(params[:id]).order("created_at ASC")
    # @status = Status.where(params[:character_id]).order("created_at ASC")
    # @characters = current_user.characters.order("created_at ASC")
    # @status = current_user.characters.status.order("created_at ASC")
    # @characters = Character.where(user_id: current_user.id).order("created_at DESC")
    # @characters = Character.find(params[:id])
    # @character = Character.all.order("created_at ASC")
    # @characters = current_user.characters.order("created_at ASC")
    if user_signed_in?
      @characters = current_user.characters.order("created_at ASC")
    else
    end
  end

  def show
    @characters = Character.find(params[:id])
  end

  def new
    @characters = Character.new
    @characters.build_status
  end

  def create
    @characters = Character.new(character_params)
    
    if @characters.save
      redirect_to characters_path
    else
      render :new
    end
  end

  def edit
    @characters = Character.find(params[:id])
  end

  def update
    @characters = Character.find(params[:id])
    if @characters.update(update_character_params)
      redirect_to characters_path
    else
      render :edit
    end
  end

  def destroy
    @characters = Character.find(params[:id])
    if @characters.destroy 
      redirect_to root_path
    end
  end


  private
  def move_to_index
    redirect_to action: :index unless user_signed_in?
    # @characters = Character.where(params[:id]).order("created_at ASC")
  end
  # def set_params
  # #   @characters = Character.find(params[:id])
  #   @characters = Character.where(params[:id]).order("created_at ASC")
  # end

  
  def character_params
    params.require(:character).permit(:name, {user_ids:[]},
      status_attributes: [:id, :life, :move, :attack, :range, :poison, :blood,
        :foot, :arms, :faint, :confusion, :curse, :invisible, :buff, :blessing]
    )
  end

  def update_character_params
    params.require(:character).permit(:name, :id, {user_ids:[]},
      status_attributes: [:id, :_destroy, :life, :move, :attack, :range, :poison, :blood,
         :foot, :arms, :faint, :confusion, :curse, :invisible, :buff, :blessing]
    )
  end
end
