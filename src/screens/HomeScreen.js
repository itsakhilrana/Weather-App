import React from 'react'

//Css
import './HomeScreen.css'

//Components
import WeatherComp from '../components/WeatherComp'
import HoursComp from '../components/HoursComp'
import ForecastComp from '../components/ForecastComp'

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <WeatherComp/>
            <HoursComp/>
            <ForecastComp/>
        </div>
    )
}

export default HomeScreen
