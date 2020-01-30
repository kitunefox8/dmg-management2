class Character < ApplicationRecord
  has_many :character_users,    dependent: :destroy
  has_many :users,              through: :character_users
end
