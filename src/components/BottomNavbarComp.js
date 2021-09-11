import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa'
import { globalStore } from '../App'
//Css
import './BottomNavbarComp.css'

const BottomNavbarComp = (props) => {
  const history = useHistory()
  const { appTheme, appView } = useContext(globalStore)
  const [theme, setTheme] = appTheme
  const [view, setView] = appView

  return (
    <div className="bottomNavbarComp">
      <div
        className={view ? 'active' : 'noactive'}
        onClick={() => {
          setView(true)
          history.push('/')
        }}
      >
        48 Hours
      </div>
      <div
        className={!view ? 'active' : 'noactive'}
        onClick={() => {
          setView(false)
          history.push('/')
        }}
      >
        7 Days
      </div>
      <div className="theme" onClick={() => setTheme(!theme)}>
        {theme ? <FaSun size="1.5em" /> : <FaMoon size="1.5em" />}
      </div>
    </div>
  )
}

export default BottomNavbarComp
