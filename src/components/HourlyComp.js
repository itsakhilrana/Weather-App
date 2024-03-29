import React, { useContext } from 'react'
import moment from 'moment'

import { globalStore } from '../App'

//Css
import './HourlyComp.css'

const HoursComp = () => {
  const {weatherDetails} = useContext(globalStore)

  let { hourly } = weatherDetails
  return (
    <div className="hourlyComp">
      <p className="title">48 hours</p>
      <div className="hourlyForecast">
        {hourly.map((val, index) => (
          <div className="hourlyCard" key={index}>
            <img
              height="50"
              width="50"
              alt="cloud"
              src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@4x.png`}
            ></img>
            <div>
              
              <p className="hourlyTemp">{val.temp}<span className="symbol">&#176;C</span></p>
              <p className="hourlyTime">
                {moment(val.dt * 1000).format('HH:mm a')}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HoursComp
