class CreateJoins < ActiveRecord::Migration[6.0]
  def change
    create_table :joins do |t|
      t.integer :user_id
      t.integer :team_id
      t.timestamps
    end
  end
end
