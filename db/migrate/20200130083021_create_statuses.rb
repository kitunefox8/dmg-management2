class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.integer :life
      t.integer :move
      t.integer :attack
      t.integer :range
    # 状態
      t.integer :poison
      t.integer :blood
      t.integer :foot
      t.integer :arms
      t.integer :faint
      t.integer :confusion
      t.integer :curse
      t.integer :invisible
      t.integer :buff
      t.integer :blessing
    # ここまで
      t.integer :character_id
      t.timestamps
    end
  end
end