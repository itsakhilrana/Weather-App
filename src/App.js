import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import NavbarComp from './components/NavbarComp'

//Screens
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComp />
        <Switch>

          <Route exact path="/" component={HomeScreen} />
          <Route component={FourOFourScreen} />
          
        </Switch>
      </Router>
    </div>
  )
}

export default App
