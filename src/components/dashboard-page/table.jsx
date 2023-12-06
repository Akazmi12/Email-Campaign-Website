import React from 'react'
import PropTypes from 'prop-types';

import './dashboard.css'

export default function Table(props) {

    const { tableData }= props;

    return (
        <div className='table-container'>
            <div className="table-text">
                <h1>Campaigns Running</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
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
            <div className="table-button">
                <button>View All</button>
            </div>
        </div>
    )
}

Table.propTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
}