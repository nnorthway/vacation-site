import { useState } from "react"
import { NavLink } from "react-router"
import classes from "./Header.module.css"
export default function Header() {
  const [ dropdownActive, setDropdownActive ] = useState(false)
  function dropdownToggle() {
    setDropdownActive(!dropdownActive)
  }
  return (
    <header className={classes.header}>
      <img src="/public/princess.jpeg" alt="Princess Cruises Logo" />
      <nav>
        <NavLink to="/" className={classes.nav_item}>Home</NavLink>
        <span 
          className={`${classes.dropdown_wrapper} ${classes.nav_item}`}
          to="/calendar" 
          onMouseEnter={dropdownToggle}
          onMouseLeave={dropdownToggle}
          >
          <NavLink to="/calendar">Calendar</NavLink>
          {dropdownActive && 
            <ul className={classes.dropdown}>
              <li><NavLink to="/calendar/0">Oct 3</NavLink></li>
              <li><NavLink to="/calendar/1">Oct 4</NavLink></li>
              <li><NavLink to="/calendar/2">Oct 5</NavLink></li>
              <li><NavLink to="/calendar/3">Oct 6</NavLink></li>
              <li><NavLink to="/calendar/4">Oct 7</NavLink></li>
              <li><NavLink to="/calendar/5">Oct 8</NavLink></li>
              <li><NavLink to="/calendar/6">Oct 9</NavLink></li>
              <li><NavLink to="/calendar/7">Oct 10</NavLink></li>
            </ul>
          }
        </span>
      </nav>
    </header>
  )
}