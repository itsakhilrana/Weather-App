import React, { useContext } from 'react'
import moment from 'moment'

import { globalStore } from '../App'
//Css
import './WeatherComp.css'

const WeatherComp = () => {
  const { weatherDetails, queryHandler } = useContext(globalStore)
  
  let { timezone, current } = weatherDetails

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const t = new Date()
  const month = t.getMonth()
  const date = t.getDate()
  const day = t.getDay()

  return (
    <div className="weatherComp">
      <div className="locationContainer">
        <p className="location">
          {queryHandler.cityName ? queryHandler.cityName : timezone}
        </p>
      </div>

      <div className="dtContainer">
        <p className="time">
          {moment(current.dt * 1000).format('HH:mm a')} {days[day]}, {date}{' '}
          {months[month]}
        </p>
      </div>

      <div className="tempContainer">
        <p className="weatherIcon">
          <img
            src={`http://openweathermap.org/img/wn//${current.weather[0].icon}@4x.png`}
            alt="couldImg"
          ></img>
        </p>
        <p className="temp">
          {current.temp} <span className="symbol">&#176;C</span>
          <span className="description">{current.weather[0].description}</span>
        </p>
      </div>

      <div className="weatherDetails">
        <p className="location">
          Humidity: <span>{current.humidity}%</span>
        </p>
        <p className="location">
          Wind: <span>{current.wind_speed}km/h</span>
        </p>
        <p className="location">
          Pressure: <span>{current.pressure}</span>
        </p>
      </div>
    </div>
  )
}

export default WeatherComp
