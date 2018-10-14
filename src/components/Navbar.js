import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

// withRouter kako bi Navbar komponenta imala prosp, jer samo komponente koje se koriste preko Route imaju svoj props, kako npr. About, Contact i Todos komponenta u App.js

const Navbar = (props) => {
  setTimeout(() => {
    props.history.push('/about'); //history.push sluzi za redirekciju stranice
  }, 2000);

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
 
export default withRouter(Navbar);