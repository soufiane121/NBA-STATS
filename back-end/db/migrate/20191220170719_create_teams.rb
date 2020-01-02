class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.jsonb :team_data, default: '{}'
      t.timestamps
    end
  end
end
