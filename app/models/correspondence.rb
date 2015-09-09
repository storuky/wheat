class Correspondence < ActiveRecord::Base
  before_save :set_users
  before_save :set_positions

  has_many :correspondence_positions
  has_many :positions, through: :correspondence_positions

  has_many :correspondence_users
  has_many :users, through: :correspondence_users

  has_many :messages

end
