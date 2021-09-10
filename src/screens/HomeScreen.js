import React from 'react'

//Css
import './HomeScreen.css'

//Components
import WeatherComp from '../components/WeatherComp'
import HourlyComp from '../components/HourlyComp'
import ForecastComp from '../components/ForecastComp'

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <WeatherComp/>
            <div className="container">
            <HourlyComp/>
            <ForecastComp/>
            </div>
        </div>
    )
}

export default HomeScreen
