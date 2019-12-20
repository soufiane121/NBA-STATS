class CreateJoins < ActiveRecord::Migration[6.0]
  def change
    create_table :joins do |t|
      t.string :user_id
      t.string :team_id
      t.timestamps
    end
  end
end
