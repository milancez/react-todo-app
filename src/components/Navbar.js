import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return ( 
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">React Learning</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/todo">Todo</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {/* NavLink dodatje klasu active kad je link aktivna strana sa tim linkom */}
        </ul>
      </div>
    </nav>
   );
}
 
export default Navbar;