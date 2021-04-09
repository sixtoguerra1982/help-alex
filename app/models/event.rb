class Event < ApplicationRecord
    validates :title, presence: true
    validates :start, presence: true
end
