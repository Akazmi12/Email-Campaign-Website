import React from 'react'
import './emailtemplate.css'
import userDp from '../../assets/user-dp.svg'
import arrowDown from '../../assets/arrow-icon.svg'
import menuBar from '../../assets/menu-bar.svg'

import Hoc from '../hoc/hoc'

const Emailtemplate = (props) => {
    return (
        <div className="main-interface">
            <div className="dashboard-container">
                <div className='top-bar'>
                    <div className='center-box'>
                        <div className="left-text">
                            <div className="menu-button">
                                <img src={menuBar} onClick={props.func} className='menu-bars' />
                                <h1>Email Templates</h1>
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
                {/* CODE USED FROM TARGET COMPONENT */}
                <div className="template-margin">
                    <div className="template-panel">
                        <div className="target-center">
                            <div className="target-heading">
                                <div className="target-text">
                                    <h1>Email Templates</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div>
                                <button>Add Template</button>
                            </div>
                        </div>
                    </div>
                    <div className="template-main-container">
                        <div className="template-center">
                            <div className="top-button">
                                <button className='left-top-button'>Public Email Template</button>
                                <button className='right-top-button'>Private Email Template</button>
                            </div>

                            <div className='template-box-container'>
                                <div className="template-box">
                                    <div className="template-heading">
                                        <h1>PayPal</h1>
                                    </div>
                                    <div className="template-detail">
                                        <p>Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s</p>
                                    </div>
                                    <div className='template-button'>
                                        <button className="left-template-button">Preview</button>
                                        <button className="right-template-button">Edit</button>
                                    </div>
                                </div>
                                <div className="template-box">
                                    <div className="template-heading">
                                        <h1>PayPal</h1>
                                    </div>
                                    <div className="template-detail">
                                        <p>Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s</p>
                                    </div>
                                    <div className='template-button'>
                                        <button className="left-template-button">Preview</button>
                                        <button className="right-template-button">Edit</button>
                                    </div>
                                </div>
                                <div className="template-box">
                                    <div className="template-heading">
                                        <h1>PayPal</h1>
                                    </div>
                                    <div className="template-detail">
                                        <p>Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s</p>
                                    </div>
                                    <div className='template-button'>
                                        <button className="left-template-button">Preview</button>
                                        <button className="right-template-button">Edit</button>
                                    </div>
                                </div>
                                <div className="template-box">
                                    <div className="template-heading">
                                        <h1>PayPal</h1>
                                    </div>
                                    <div className="template-detail">
                                        <p>Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s</p>
                                    </div>
                                    <div className='template-button'>
                                        <button className="left-template-button">Preview</button>
                                        <button className="right-template-button">Edit</button>
                                    </div>
                                </div>
                                <div className="template-box">
                                    <div className="template-heading">
                                        <h1>PayPal</h1>
                                    </div>
                                    <div className="template-detail">
                                        <p>Lorem Ipsum is simply dummy text of
                                            the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's
                                            standard dummy text ever since the
                                            1500s</p>
                                    </div>
                                    <div className='template-button'>
                                        <button className="left-template-button">Preview</button>
                                        <button className="right-template-button">Edit</button>
                                    </div>
                                </div>
                            </div>

                            <div className="template-bottom">
                                <button>View All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Hoc(Emailtemplate);