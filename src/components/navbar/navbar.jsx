import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import navLogo from '../../assets/dark-blue-logo.svg'
export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src={navLogo} alt='SecureRIA'></img>
      </div>
        <ul className='nav-links'>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/'>New Email Campaign</Link></li>
          <li><Link to='/'>Targets</Link></li>
          <li><Link to='/'>Email Template</Link></li>
          <li><Link to='/'>Landing Page Template</Link></li>
          <li><Link to='/'>Campaigns Running</Link></li>
          <li><Link to='/'>Reporting</Link></li>
        </ul>
    </nav>
  )
}
