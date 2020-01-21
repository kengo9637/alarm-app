class AlarmsController < ApplicationController
  def index
    @alarms = Alarm.all
  end

  def new
    @alarms = Alarm.new
    @hours = Hour.all
    @minutes = Minute.all
  end

  def create
    # @alarm = Alarm.create(name: alarm_params[:name], hour_id: alarm_params[:hour_id], minute_id: alarm_params[:minute_id], music: alarm_params[:music])
    @alarms = Alarm.new(name: alarm_params[:name], hour_id: alarm_params[:hour_id], minute_id: alarm_params[:minute_id], music: alarm_params[:music])
    @hours = Hour.all
    @minutes = Minute.all
    if @alarms.save
    redirect_to controller: :alarms, action: :index
    else
      render "new"
    end

  end

  def edit
    @alarms = Alarm.find(params[:id])
    @hours = Hour.all
    @minutes = Minute.all
  end

  def update
    @alarms = Alarm.find(params[:id])
    @hours = Hour.all
    @minutes = Minute.all

    if @alarms.update(alarm_params)
      redirect_to controller: :alarms, action: :index
      else
        render "edit"
      end
  end

  def destroy
    alarm = Alarm.find(params[:id])
    alarm.destroy
    redirect_to root_path
  end


    private
    def alarm_params
      params.require(:alarm).permit(:name, :hour_id, :minute_id, :music)
    end

end
