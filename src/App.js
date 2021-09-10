import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import NavbarComp from './components/NavbarComp'
import BottomNavbarComp from './components/BottomNavbarComp'
//Screens
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'

function App() {
  const [view, setView] = useState(true)

  console.log(view)
  

  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/" show={view} >
          <HomeScreen show={view}/>
          </Route>
          <Route component={FourOFourScreen} />
        </Switch>

        <BottomNavbarComp hourly={view => setView(view)} forecast={view => setView(view)} />
      </Router>
    </div>
  )
}

export default App
