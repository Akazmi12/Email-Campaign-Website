import React from 'react'
import './target.css'
import { Navbar } from '../navbar/navbar'
import arrowDown from '../../assets/arrow-icon.svg'
import userDp from '../../assets/user-dp.svg'
import tableData from '../dashboard-page/tabledata.json'



export const Target = () => {
    return (
        <div className="main-interface">
            <div className='sidebar'>
                <Navbar />
            </div>
            <div className="target-container">
                <div className='top-bar'>
                    <div className='center-box'>
                        <div className="left-text">
                            <h1>Dashboard | Target</h1>
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
                <div className="target-panel">
                    <div className="target-center">
                        <div className="target-heading">
                            <div className="target-text">
                                <h1>Target</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                            <button>Add Target</button>
                        </div>
                        <div className="table-section">
                            <table className='table-tag'>
                                <thead>
                                    <tr>
                                        <th>Sent Date</th>
                                        <th>Name</th>
                                        <th>Open</th>
                                        <th>Internal Clicks</th>
                                        <th>Time Opened</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((dataLine, index) => (
                                        <tr key={index} className={index % 2 === 0 ? "even" : ""}>
                                            <td>{dataLine.SentDate}</td>
                                            <td>{dataLine.Name}</td>
                                            <td>{dataLine.Open}</td>
                                            <td>{dataLine.InClicks}</td>
                                            <td>{dataLine.TimeOpened}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
