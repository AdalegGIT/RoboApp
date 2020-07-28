class RobotsController < ApplicationController
  def index
    @robots = Robot.all.reverse
    @robot = Robot.new
  end

  def show
    @robot = Robot.find(params[:id])
    respond_to do |format|
      format.html { render partial: 'robo'}
      format.json { render json: @robot}

    end
  end

  def new
    @robot = Robot.new
  end

  def create
    @robot = Robot.new(robo_params)
    if @robot.save
      if request.xhr? #this is from a fetch 
        p "``````````````````````````request from fetch"
          respond_to do |format|
            format.json {render json: @robot}#send a json
            format.html {render partial: 'robot', locals:{robot: @robot}}
          end
      else #this is a normal http request
      redirect_to robots_url
      end
    end
  end


  private
  def robo_params
    params.require(:robot).permit(:name, :address, :modelNumber, :lasers, :japanse)
  end
end
