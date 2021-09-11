import React from 'react'

//Css
import './HomeScreen.css'

//Components
import WeatherComp from '../components/WeatherComp'
import HourlyComp from '../components/HourlyComp'
import ForecastComp from '../components/ForecastComp'

const HomeScreen = (props) => {
  return (
    <div className="HomeScreen">
      <WeatherComp />
      <div className="container">
        {props.show ? <HourlyComp /> : <ForecastComp />}
      </div>
    </div>
  )
}

export default HomeScreen
