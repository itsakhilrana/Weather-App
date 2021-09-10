import React from 'react'

//Components
import WeatherComp from '../components/WeatherComp'
import HoursComp from '../components/HoursComp'
import ForecastComp from '../components/ForecastComp'

const HomeScreen = () => {
    return (
        <div>
            <WeatherComp/>
            <HoursComp/>
            <ForecastComp/>
        </div>
    )
}

export default HomeScreen
