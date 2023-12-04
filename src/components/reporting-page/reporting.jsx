import React from 'react'
import { Navbar } from '../navbar/navbar'
import arrowDown from '../../assets/arrow-icon.svg'
import userDp from '../../assets/user-dp.svg'
import './reporting.css'

export const Reporting = () => {
    return (
        <div className="main-interface">
            <div className='sidebar'>
                <Navbar />
            </div>
            <div className="campaign-container">
                <div className='top-bar'>
                    <div className='center-box'>
                        <div className="left-text">
                            <h1>Dashboard | Reporting</h1>
                        </div>
                        <div className="right-content">
                            <img src={userDp} alt=''></img>
                            <div className="email-text">
                                <h3>Jenny Wilson</h3>
                                <p>jennywilson@gmail.com</p>
                            </div>
                            <img className="arrow-icon" src={arrowDown} alt=''></img>
                        </div>
                    </div>
                </div>
                <div className="campaign-panel">
                    <div className="campaign-center">
                        <div className="campaign-heading">
                            <h1>Reporting</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
