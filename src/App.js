import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import NavbarComp from './components/NavbarComp'
import BottomNavbarComp from './components/BottomNavbarComp'
//Screens
import HomeScreen from './screens/HomeScreen'
import FourOFourScreen from './screens/FourOFourScreen'

export const globalStore = createContext()

function App() {
  const [view, setView] = useState(true)
  const [theme, setTheme] = useState(true)
  const [pos, setPos] = useState({ lat: '', long: '' })
  const [query, setQuery] = useState('')

  console.log(query)


  let initState = {
    timezone: 'Timezone',
    current: {
      dt: 'datetime',
      temp: 'temp',
      pressure: 'pressure',
      humidity: 'humidity',
      wind_speed: 'wind',
      weather: [{ description: 'cluds', icon: 'icon' }],
    },
    hourly:[],
    daily:[]
  }
  const [weatherDetails, setweatherDetails] = useState(initState)

  const savePositionToState = async (position) => {
    setPos({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    })
  }

  const URL = 'https://api.openweathermap.org/data/2.5/onecall'
  const URL2 = 'https://api.openweathermap.org/data/2.5/weather'
  const API_KEY = '529cac661d57d3580cfefb96049ce565'

  const fetchWeather = async () => {
    try {
      if(!query){

        if(!pos.lat){
          await window.navigator.geolocation.getCurrentPosition(savePositionToState)
        }
        

      const { data } = await axios.get(URL, {
        params: {
          lat: pos.lat,
          lon: pos.long,
          exclude: 'minutely',
          units: 'metric',
          APPID: API_KEY,
        },
      })
      setweatherDetails(data)
      }else{

        const { data } = await axios.get(URL2, {
          params: {
            q: query,
            APPID: API_KEY,
          },
        })

        setPos({
          lat: data.coord.lat,
          long: data.coord.lon,
        })
        setQuery("")
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchWeather()
  }, [pos.lat, pos.long,query])

  return (
    <div className="App" style={theme ? {backgroundColor:"#1F2052"} : {backgroundColor:"black"}}>
      <globalStore.Provider value={weatherDetails}>
        <Router>
          <NavbarComp query={(val) => setQuery(val)} />
          <Switch>
            <Route exact path="/" show={view}>
              <HomeScreen show={view} />
            </Route>
            <Route component={FourOFourScreen} />
          </Switch>

          <BottomNavbarComp
          show={view}
          theme={theme}
          mytheme = {(theme) =>setTheme(theme)}
            hourly={(view) => setView(view)}
            forecast={(view) => setView(view)}
          />
        </Router>
      </globalStore.Provider>
    </div>
  )
}

export default App
