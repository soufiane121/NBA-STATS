class User < ApplicationRecord
    has_many :joins 
    has_many :teams, through: :joins
    validates :password, presence: true
    validates :user_name, uniqueness: true
    has_secure_password
end
