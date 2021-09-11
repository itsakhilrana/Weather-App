import { useState, useContext } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { globalStore } from '../App'

//Css
import './NavbarComp.css'
const NavbarComp = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const { queryHandler } = useContext(globalStore)
  console.log('Navbar', queryHandler)

  return (
    <div className="header">
      <Link className="webName" to="/" style={{textDecoration:"none"}}>
        <p >Weather App</p>
      </Link>
      <div className="searchContainer">
        <div style={{ display: 'flex' }}>
          <input
            className="searchBar"
            placeholder="search your city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            onClick={() => {
              props.query(search)
              history.push('/')
            }}
            disabled={!search ? true : false}
          >
            <FaSearch />
          </button>
        </div>
        {queryHandler.error && (
          <p
            style={{
              width: '100%',
              fontSize: '12px',
              marginTop: '5px',
              color: 'red',
              fontWeight: 'bold',
            }}
          >
            {'city not found'}
          </p>
        )}
      </div>
    </div>
  )
}

export default NavbarComp
