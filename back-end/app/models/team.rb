require 'rest-client'

class Team < ApplicationRecord
    has_many :joins
    has_many :users, through: :joins


    def self.all_teams
        url= "https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/2020?key=ede810c13cea487ebb74eb91a43793a2"
        respons = RestClient.get(url)
        full_data= JSON.parse(respons)
        full_data
    end
end
