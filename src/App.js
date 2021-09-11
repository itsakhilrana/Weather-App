import { useState, useEffect, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Helpers
import { initState, API_KEY, URL, URL2 } from './helpers/helpers'
//Api's
import { fetchWeather } from './api/weatherApi'
//Components
import NavbarComp from './components/NavbarComp'
import BottomNavbarComp from './components/BottomNavbarComp'
//Screens
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'

//global state of App
export const globalStore = createContext()

function App() {
  //weather related states
  const [weatherDetails, setweatherDetails] = useState(initState)
  const [pos, setPos] = useState({ lat: '', long: '' })
  const [query, setQuery] = useState('')
  const [queryHandler, setQueryHandler] = useState({})

  //toggles
  const [view, setView] = useState(true)
  const [theme, setTheme] = useState(true)

  console.log(query)
  console.log('queryHandler', queryHandler)

  const savePositionToState = async (position) => {
    setPos({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    })
  }

  useEffect(() => {
    fetchWeather(
      savePositionToState,
      pos,
      setPos,
      setweatherDetails,
      API_KEY,
      URL,
      URL2,
      query,
      setQuery,
      setQueryHandler
    )
  }, [pos.lat, pos.long, query])

  return (
    <div
      className="App"
      style={
        theme ? { backgroundColor: '#7073ff' } : { backgroundColor: '#171A1F' }
      }
    >
      <globalStore.Provider
        value={{
          weatherDetails: weatherDetails,
          queryHandler: queryHandler,
          appTheme: [theme, setTheme],
          appView: [view, setView],
        }}
      >
        <Router>
          <NavbarComp query={(val) => setQuery(val)} />
          <Switch>
            <Route exact path="/" show={view}>
              <HomeScreen show={view} />
            </Route>
            <Route component={FourOFourScreen} />
          </Switch>

          <BottomNavbarComp />
        </Router>
      </globalStore.Provider>
    </div>
  )
}

export default App
