import React, { useContext } from 'react'
import cloud from '../assets/cloud.svg'
import { globalStore } from '../App'

//Css
import './ForecastComp.css'

const ForecastComp = () => {
  const weatherDetails = useContext(globalStore)
  const { daily } = weatherDetails

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'Monday',
  ]

  const t = new Date()
  const day = t.getDay()

  return (
    <div className="forecastComp">
      {daily.map((val, index) => (
        <div className="forecastDays" key={index}>
          <div>
            <p className="day">{days[index]}</p>
            <img
              height="50"
              width="50"
              src={`http://openweathermap.org/img/wn//${val.weather[0].icon}@4x.png`}
            ></img>
          </div>

          <div>
            <div className="nightContainer">
              <p className="night">Night- </p>
              <p className="tempDay">
                {val.temp.night}
                <span className="symbol">&#176;C</span>
              </p>
            </div>

            <div>
              <p className="morning">Day- </p>
              <p className="tempDay">
                {val.temp.day}
                <span className="symbol">&#176;C</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ForecastComp
