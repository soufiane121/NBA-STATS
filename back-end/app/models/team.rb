require 'rest-client'

class Team < ApplicationRecord
    has_many :joins
    has_many :users, through: :joins


    def self.all_teams
        url= "https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2020?key=1f7f38a436004cd6a266035c5ade330e"
        respons = RestClient.get(url)
        full_data= JSON.parse(respons)
        full_data
    end

    def self.create_all_teams
        self.all_teams.each do |ele| 
            self.create(team_data: ele)
        end
    end
end
