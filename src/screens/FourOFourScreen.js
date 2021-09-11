import React from 'react'
import { Link } from 'react-router-dom'

//Css
import './FourOFourScreen.css'
const FourOFourScreen = () => {
  return (
    <div className="fourOfourScreen">
      <h1>
        Opps, seems like you are lost?
      </h1>
      <div >
        <Link to="/" style={{color:"antiquewhite", fontWeight:"bold", textDecoration:"none"}}>Mind going back Home!</Link>
      </div>
    </div>
  )
}

export default FourOFourScreen
