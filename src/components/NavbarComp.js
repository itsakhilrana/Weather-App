import { useState } from 'react'

//Css
import './NavbarComp.css'
const NavbarComp = (props) => {
  const [search, setSearch] = useState("")

  return (
    <div className="header">
      <p>Weather App</p>
      <div className="searchContainer">
        <input
          className="searchBar"
          placeholder="search.."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button  onClick={() =>props.query(search)}> Search</button>
      </div>
    </div>
  )
}

export default NavbarComp
