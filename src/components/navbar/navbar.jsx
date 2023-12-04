import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import navLogo from '../../assets/dark-blue-logo.svg'
export const Navbar = () => {
  return (
    <div className="navbar-fixed-position">
      <nav className="navbar-container">
        <div className="navbar-logo">
          {/* <img src={navLogo} alt='SecureRIA'></img> */}
          <div className='logo-image'></div>
        </div>
        <ul className='nav-links'>
          <li><Link to='/dashboard'>Dashboard</Link></li>
          <li><Link to='/newcampaign'>New Email Campaign</Link></li>
          <li><Link to='/target'>Targets</Link></li>
          <li><Link to='/emailtemplate'>Email Template</Link></li>
          <li><Link to='/landingtemplate'>Landing Page Template</Link></li>
          <li><Link to='/activecampaign'>Campaigns Running</Link></li>
          <li><Link to='/reporting'>Reporting</Link></li>
        </ul>
        <Link to='/'><button>Log Out</button></Link>
      </nav>
    </div>
  )
}
