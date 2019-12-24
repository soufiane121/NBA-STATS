class TeamsController < ApplicationController


    def index
        # # @teams= Team.all_teams
        # @teams = Team.create_all_teams
        # render json: @teams
        # if Team.create_all_teams.length == 0
        #     @teams = Team.create_all_teams
        #       render json: @teams 
        # else
        #     @teams = Team.all_teams
        #       render json: @teams
        # end
        teams = Team.all_teams
        render json: teams, except: [:OpponentStat]
    end

    
end
