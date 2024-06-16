class Creator < ApplicationRecord
    has_many :products
    has_many :images
    has_many :rich_texts
    has_one :landing_page
    has_one :creator_layout
  end