import React from 'react'
import userDp from '../../assets/user-dp.svg'
import arrowDown from '../../assets/arrow-icon.svg'
import addImg from '../../assets/address-image.svg'
import rArrow from '../../assets/right-arrow.svg'
import menuBar from '../../assets/menu-bar.svg'
import Hoc from '../hoc/hoc'

import tableData from './tabledata.json'
import './dashboard.css'
import Table from './table'

const Dashboard = (props) => {
  return (
    <div className="main-interface">
      <div className="dashboard-container">
        <div className='top-bar'>
          <div className='center-box'>
            <div className="left-text">
              <div className="menu-button">
                <img src={menuBar} onClick={props.func} className='menu-bars'/>
                <h1>Dashboard</h1>
              </div>
            </div>
            <div className="right-content">
              <img className="profile-img" src={userDp} alt=''></img>
              <div className="email-text">
                <h3>Jenny Wilson</h3>
                <p>jennywilson@gmail.com</p>
              </div>
              <img className="arrow-icon" src={arrowDown} alt=''></img>
            </div>
          </div>
        </div>
        <div className="dashboard-panel">
          <div className="dashboard-center">
            <div className="welcome-container">
              <div className="welcome-text">Welcome Back,<div className="welcome-name">Jenny Wilson!</div></div>
              <div className="date-display">Today's Monday 20,2023</div>
            </div>
            <div className='address-container'>
              <div className='address-logo'><img src={addImg} alt='Logo' /></div>
              <div className='address-content'>
                <div className='address-upper-text'>PayPal</div>
                <div className='address-lower-text'>2715 Ash Dr. San Jose, South Dakota 83475</div>
              </div>
            </div>
            <div className='cards-container'>
              <div className="cards-center">
                <div className="card card-1">
                  <h1>10</h1>
                  <h5>Current Campaign</h5>
                  <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.<img className='para-arrow' src={rArrow} alt='clickme' /></p>
                </div>
                <div className="card card-2">
                  <h1>05</h1>
                  <h5>Upcoming Campaign</h5>
                  <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.<img className='para-arrow' src={rArrow} alt='clickme' /></p>
                </div>
                <div className="card card-3">
                  <h1>07</h1>
                  <h5>Private Email Template</h5>
                  <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.<img className='para-arrow' src={rArrow} alt='clickme' /></p>
                </div>
                <div className="card card-4">
                  <h1>15</h1>
                  <h5>Public Email Template</h5>
                  <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.<img className='para-arrow' src={rArrow} alt='clickme' /></p>
                </div>
              </div>
            </div>
            <Table tableData={tableData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hoc(Dashboard);
