import React from 'react'

//Css
import './BottomNavbarComp.css'

const BottomNavbarComp = (props) => {

  
console.log(props.show)

  return (
    <div className="bottomNavbarComp">
      
      <div className={props.show ? 'hours' : 'nohours'} onClick={() => props.hourly(true)}>
        48 Hours
      </div>
      <div className={props.show ? 'nodays' : 'days'} onClick={ () => props.forecast(false)}>
        7 Days
      </div>
      <div className="theme" onClick={()=>props.mytheme(!props.theme)}>Theme</div>
    </div>
  )
}

export default BottomNavbarComp
