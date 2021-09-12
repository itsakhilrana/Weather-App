import React, { useContext } from 'react'

import { globalStore } from '../App'

//Css
import './ForecastComp.css'

const ForecastComp = () => {
  const { weatherDetails } = useContext(globalStore)
  const { daily } = weatherDetails

  var day_of_week = new Date().getDay()

  var list = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  var sorted_list = list.slice(day_of_week).concat(list.slice(0, day_of_week))


  return (
    <div className="forecastComp">
      {daily.map((val, index) => (
        <div className="forecastDays" key={index}>
          <div>
            <p className="day">{sorted_list[index]}</p>
            <img
              height="50"
              width="50"
              alt="cloud"
              src={`http://openweathermap.org/img/wn//${val.weather[0].icon}@4x.png`}
            ></img>
          </div>

          <div style={{ marginRight: '10px' }}>
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
