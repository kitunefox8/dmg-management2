class CreateCharacterUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :character_users do |t|
      # t.references :user, foreign_key: true
      # t.references :character, foreign_key: true
      # ↑characterテーブル前にcharacter_usersテーブル作った為エラーした
      t.timestamps
    end
  end
end
