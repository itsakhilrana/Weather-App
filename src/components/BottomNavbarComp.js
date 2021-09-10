import React from 'react'

//Css
import './BottomNavbarComp.css'

const BottomNavbarComp = (props) => {
  return (
    <div className="bottomNavbarComp">
      <div className="hours" onClick={() => props.hourly(true)}>
        48 Hours
      </div>
      <div className="days" onClick={ () => props.forecast(false)}>
        7 Days
      </div>
      <div className="theme">Theme</div>
    </div>
  )
}

export default BottomNavbarComp
