import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
//Css
import './BottomNavbarComp.css'

const BottomNavbarComp = (props) => {
  const history = useHistory()

  console.log(props.show)

  return (
    <div className="bottomNavbarComp">
      <div
        className={props.show ? 'active' : 'noactive'}
        onClick={() => {
          props.hourly(true)
          history.push('/')
        }}
      >
        48 Hours
      </div>
      <div
        className={!props.show ? 'active' : 'noactive'}
        onClick={() => {
          props.forecast(false)
          history.push("/")
        }}
      >
        7 Days
      </div>
      <div className="theme" onClick={() => props.mytheme(!props.theme)}>
        {props.theme ? <FaSun size="1.5em" /> : <FaMoon size="1.5em" />}
      </div>
    </div>
  )
}

export default BottomNavbarComp
