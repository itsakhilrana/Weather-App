import React from 'react'
import cloudImg from '../assets/cloud.svg'

//Css
import './WeatherComp.css'

const WeatherComp = () => {
  return (
    <div className="weatherComp">
      <div className="locationContainer">
        <p className="location">Alentown, New Mexico</p>
      </div>

      <div className="dtContainer">
        <p className="time">12:30 Sat, 3 Aug</p>
      </div>

      <div className="tempContainer">
        <p className="weatherIcon">
          <img src={cloudImg} alt="couldImg"></img>
        </p>
        <p className="temp">
          30 <span className="symbol">&#176;C</span>
          <span className="description">overcast clouds</span>
        </p>
      </div>

      <div className="weatherDetails">
        <p className="location">Humidity: 84%</p>
        <p className="location">Wind: 3 km/h</p>
        <p className="location">Pressure: 0000</p>
      </div>
    </div>
  )
}

export default WeatherComp
