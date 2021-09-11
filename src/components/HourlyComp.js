import React, { useContext } from 'react'
import moment from 'moment'
import cloud from '../assets/cloud.svg'
import { globalStore } from '../App'

//Css
import './HourlyComp.css'

const HoursComp = () => {
  const weatherDetails = useContext(globalStore)

  let { hourly } = weatherDetails
  return (
    <div className="hourlyComp">
      <p>48 hours</p>
      <div className="hourlyForecast">
        {hourly.map((val, index) => (
          <div className="hourlyCard" key={index}>
            <img
              height="50"
              width="50"
              src={`http://openweathermap.org/img/wn/${val.weather[0].icon}@4x.png`}
            ></img>
            <div>
              <p className="hourlyTime">
                {moment(val.dt * 1000).format('HH:mm a')}
              </p>
              <p className="hourlyTemp">{val.temp}<span className="symbol">&#176;C</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HoursComp
