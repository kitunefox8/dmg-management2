class Character < ApplicationRecord
  has_many :character_users,    dependent: :destroy
  has_many :users,              through: :character_users
  has_one :status,              dependent: :destroy
  accepts_nested_attributes_for :status, allow_destroy: true
end
