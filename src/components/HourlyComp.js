import React from 'react'
import cloud from '../assets/cloud.svg'

//Css
import './HourlyComp.css'

const HoursComp = () => {
  return (
    <div className="hourlyComp">
      <p>48 hours</p>
      <div className="hourlyForecast">
        <div className="hourlyCard">
          <img height="50" width="50" src={cloud}></img>
          <div>
            <p className="hourlyTime">10 am</p>
            <p className="hourlyTemp">
              26 <span className="symbol">&#176;C</span>
            </p>
          </div>
        </div>

        <div className="hourlyCard">
          <img height="50" width="50" src={cloud}></img>
          <div>
            <p className="hourlyTime">10 am</p>
            <p className="hourlyTemp">26</p>
          </div>
        </div>

        <div className="hourlyCard">
          <img height="50" width="50" src={cloud}></img>
          <div>
            <p className="hourlyTime">10 am</p>
            <p className="hourlyTemp">26</p>
          </div>
        </div>

        <div className="hourlyCard">
          <img height="50" width="50" src={cloud}></img>
          <div>
            <p className="hourlyTime">10 am</p>
            <p className="hourlyTemp">26</p>
          </div>
        </div>

        <div className="hourlyCard">
          <img height="50" width="50" src={cloud}></img>
          <div>
            <p className="hourlyTime">10 am</p>
            <p className="hourlyTemp">26</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HoursComp
