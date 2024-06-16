class LandingPage < ApplicationRecord
  belongs_to :creator

  serialize :structure, Hash

  validates :structure, presence: true
end