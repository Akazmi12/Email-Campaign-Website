import React from 'react'
import { Link } from 'react-router-dom'

import arrowLeft from '../../assets/left-arrow.png'
import './navbar.css'

export const Navbar = (props) => {


  return (
    <div className='MAIN_BOX'>
      <div id="nav" className="MAIN_BAR">
        <div className="navbar-fixed-position">
          <nav className="navbar-container">
            <div className="navbar-logo">
              <img className="menu-icon" onClick={props.func} src={arrowLeft} alt=''></img>
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
      </div>
    </div>
  )
}
