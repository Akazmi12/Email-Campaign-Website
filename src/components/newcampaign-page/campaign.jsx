import React from 'react'
import './campaign.css'
import { Navbar } from '../navbar/navbar'
import arrowDown from '../../assets/arrow-icon.svg'
import userDp from '../../assets/user-dp.svg'
import selectArrow from '../../assets/select-arrow.svg'
import { useFormik } from 'formik'
import { emailSchema } from '../../Validations/emailcampValidation'



export const Campaign = () => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            emailName: ""
        },
        validationSchema: emailSchema,
    })
    return (
        <div className="main-interface">
            <div className='sidebar'>
                <Navbar />
            </div>
            <div className="campaign-container">
                <div className='top-bar'>
                    <div className='center-box'>
                        <div className="left-text">
                            <h1>Dashboard | New Email Campaign</h1>
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
                            <h1>New Email Campaign</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="campaign-form-box">
                                <div className="form-left">
                                    <div className="arrow-relative">
                                        <label htmlFor='input-email'>Email Name:</label>
                                        <input
                                            id='input-email'
                                            name='emailName'
                                            placeholder='Enter Email Name'
                                            type='text'
                                            value={values.emailName}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.emailName && touched.emailName && <p style={{ marginTop: '-7px', color: 'red', fontSize: "10px" }}>{errors.emailName}</p>}
                                    </div>

                                    <label htmlFor="input-phising">Phishing Email:</label>
                                    <div className="arrow-relative">
                                        <select id='input-phising' className='input-select'>
                                            <option value="" disabled selected hidden>Select email template</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                    </div>
                                    <label htmlFor="date-buttons">Date and Time of Launch:</label>
                                    <div id='date-buttons' className="date-button-containter">
                                        <button className='now-button'>Now</button>
                                        <button className='date-time-button'>Schedule Date & Time </button>
                                    </div>

                                    <label htmlFor="input-phising" style={{ marginTop: "40px" }}>Select Time Zone:</label>
                                    <div className="arrow-relative">
                                        <select id='input-phising' className='input-select'>
                                            <option value="" disabled selected hidden>Berlin, Germany (GMT +1:00)</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                    </div>

                                    <div className="datetime-container">
                                        <div>
                                            <label htmlFor="date-buttons">Start Date:</label>
                                            <input type='date'></input>
                                        </div>
                                        <div>
                                            <label htmlFor="date-buttons">Start Time:</label>
                                            <input type='time'></input>
                                        </div>
                                    </div>


                                </div>
                                <div className="form-right">
                                    <div className="arrow-relative">
                                        <label htmlFor="input-target">Target Email:</label>
                                        <select id='input-target' className='input-select'>
                                            <option value="" disabled selected hidden>Add target email</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                    </div>

                                    <label htmlFor="input-landing">Landing Page:</label>
                                    <div className="arrow-relative">
                                        <select id='input-landing' className='input-select'>
                                            <option value="" disabled selected hidden>Select landing page template</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                    </div>
                                    <label htmlFor=''>Select Follow-Up Email</label>
                                    <div className="checkbox-container">
                                        <input id='' type='checkbox'></input>
                                        <div className="option-text">
                                            <p>Option 1: </p>
                                            <h5>Clicked link, Open Attachment or Replied to Email</h5>
                                        </div>
                                    </div>
                                    <div className="checkbox-container">
                                        <input id='' type='checkbox'></input>
                                        <div className="option-text">
                                            <p>Option 2: </p>
                                            <h5>Email or Contact them myself</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="form-buttons">
                            <button className="left-button">Preview Simulation Email</button>
                            <button className="left-button">Send Test Email</button>
                            <button className="right-button">Start Simulation Email</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
