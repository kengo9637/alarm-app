class Alarm < ApplicationRecord
  belongs_to :hour
  belongs_to :minute

  with_options presence: true do
    validates :name
    validates :music
  end

  validate :check_number_of_alarms, on: :create

def check_number_of_alarms
  if Alarm.count > 4
    errors.add(:base, "アラームの上限です")
  end
end

end
