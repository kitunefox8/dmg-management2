class AddNicknameToCharacterUsers < ActiveRecord::Migration[5.2]
  def change
    add_reference :character_users, :user, foreign_key: true
    add_reference :character_users, :character, foreign_key: true
  end
end
