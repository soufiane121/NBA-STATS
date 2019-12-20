class TeamsController < ApplicationController


    def index
        @teams= Team.all_teams
        render json: @teams
    end

    
end
