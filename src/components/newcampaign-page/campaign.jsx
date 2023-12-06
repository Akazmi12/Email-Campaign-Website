import React, { useState } from 'react'
import './campaign.css'
import Hoc from '../hoc/hoc'
import arrowDown from '../../assets/arrow-icon.svg'
import userDp from '../../assets/user-dp.svg'
import selectArrow from '../../assets/select-arrow.svg'
import menuBar from '../../assets/menu-bar.svg'

// import { useFormik } from 'formik'
// import { emailSchema } from '../../Validations/emailcampValidation'



export const Campaign = (props) => {
    // const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    //     initialValues: {
    //         emailName: ""
    //     },
    //     validationSchema: emailSchema,
    // })  WILL NOW USE REAL FORM HANDLING WIHTOUT ANY LIBRARY

    const [obj, setObj] = useState({
        email: '',
        target: '',
        phising: "",
        landing: "",
        date: "",
    })

    const [err, setErr] = useState({
        email: '',
        target: '',
        phising: "",
        landing: "",
        date: "",
    })

    const validate = (name, value) => {
        if (name === "email") {
            if (value.length === 0) {
                setErr((prev) => ({ ...prev, [name]: "Email is Required" }))
            }
            else if (!(/^[a-z0-9\s]+$/i.test(value))) {
                setErr((prev) => ({ ...prev, [name]: "Email can only contain letters and numbers" }))
            }
            else {
                setErr((prev) => ({ ...prev, [name]: '' }))
            }
        }
        else {
            if (value.length === 0) {
                console.log('ERROR')
                setErr((prev) => ({ ...prev, [name]: "This field is Required" }))
            } else {
                setErr((prev) => ({ ...prev, [name]: '' }))
            }
        }
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setObj((prev) => ({ ...prev, [name]: value }))
        validate(name, value)
    }

    // const errors = {
    //     empty: "field cannot be empty",
    //     name: "can only include letters and numbers",
    //     date: "must be greater than the"
    // }

    // const handleForm = (nodeId) => {
    //     const node = document.getElementById(nodeId);


    //     if (node.value == "") {
    //         const nodeSpan = document.getElementById(nodeId + "-span");
    //         const errorText = nodeId.toLowerCase() + " " + errors.empty;
    //         nodeSpan.innerHTML = errorText;
    //         nodeSpan.style.display = "block";
    //     }
    //     else if (node.tagName == "INPUT" && !(/^[a-z0-9\s]+$/i.test(node.value)) && node.type != "date") {
    //         const nodeSpan = document.getElementById(nodeId + "-span");
    //         const errorText = nodeId.toLowerCase() + " " + errors.name;
    //         nodeSpan.innerHTML = errorText;
    //         nodeSpan.style.display = "block";
    //     }
    //     else if (node.type == "date") {
    //         const currentDate = new Date();
    //         const year = currentDate.getFullYear();
    //         const month = currentDate.getMonth() + 1;
    //         const day = currentDate.getDate();
    //         const dateObject = node.value.split("-");
    //         const dateYear = parseInt(dateObject[0])
    //         const dateMonth = parseInt(dateObject[1]);
    //         const dateDay = parseInt(dateObject[2])
    //         if (dateYear == year) {
    //             if (dateMonth == month && dateDay > day) {
    //                 const nodeSpan = document.getElementById(nodeId + "-span");
    //                 const errorText = "";
    //                 nodeSpan.innerHTML = errorText;
    //                 nodeSpan.style.display = "none";
    //             }

    //             else if (dateMonth > month) {
    //                 const nodeSpan = document.getElementById(nodeId + "-span");
    //                 const errorText = "";
    //                 nodeSpan.innerHTML = errorText;
    //                 nodeSpan.style.display = "none";
    //             }
    //             else if (dateMonth < month) {
    //                 const nodeSpan = document.getElementById(nodeId + "-span");
    //                 const errorText = nodeId.toLowerCase() + " " + errors.date + ": " + year + " - " + month + " - " + day;
    //                 nodeSpan.innerHTML = errorText;
    //                 nodeSpan.style.display = "block";
    //             }
    //             else {
    //                 const nodeSpan = document.getElementById(nodeId + "-span");
    //                 const errorText = nodeId.toLowerCase() + " " + errors.date + ": " + year + " - " + month + " - " + day;
    //                 nodeSpan.innerHTML = errorText;
    //                 nodeSpan.style.display = "block";
    //             }
    //         }
    //         else if (dateYear > year) {
    //             const nodeSpan = document.getElementById(nodeId + "-span");
    //             const errorText = "";
    //             nodeSpan.innerHTML = errorText;
    //             nodeSpan.style.display = "none";
    //         }
    //         else if (dateYear < year) {
    //             const nodeSpan = document.getElementById(nodeId + "-span");
    //             const errorText = nodeId.toLowerCase() + " " + errors.date + ": " + year + " - " + month + " - " + day;
    //             nodeSpan.innerHTML = errorText;
    //             nodeSpan.style.display = "block";
    //         }
    //     }

    //     else {
    //         const nodeSpan = document.getElementById(nodeId + "-span");
    //         const errorText = "";
    //         nodeSpan.innerHTML = errorText;
    //         nodeSpan.style.display = "none";
    //     }
    // }

    console.log({ obj })

    return (
        <div className="main-interface">
            <div className="campaign-container">
                <div className='top-bar'>
                    <div className='center-box'>
                        <div className="left-text">
                            <div className="menu-button">
                                <img src={menuBar} onClick={props.func} className='menu-bars' />
                                <h1>Dashboard | New Email Campaign</h1>
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
                <div className="campaign-panel">
                    <div className="campaign-center">
                        <div className="campaign-heading">
                            <h1>New Email Campaign</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <form>
                            <div className="campaign-form-box">
                                <div className="form-left">
                                    <div className="arrow-relative">
                                        <label htmlFor='Username'>Email Name:</label>
                                        <input id='Username' name='email' placeholder='Enter Email Name' type='text' onChange={handleChange} />
                                        {
                                            err.email.length > 0 &&
                                            <span id='Username-span' style={{ color: "red", fontSize: "12px" }}>{err.email}</span>
                                        }
                                    </div>

                                    <label>Phishing Email:</label>
                                    <div className="arrow-relative">
                                        <select id='Phishing' name='phising' className='input-select' onBlur={handleChange}>
                                            <option value="" disabled selected hidden>Select email template</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                        {
                                            err.phising.length > 0 &&
                                            <span style={{ color: "red", fontSize: "12px" }}>{err.phising}</span>

                                        }
                                    </div>
                                    <label>Date and Time of Launch:</label>
                                    <div id='date-buttons' className="date-button-containter">
                                        <button className='now-button'>Now</button>
                                        <button className='date-time-button'>Schedule Date & Time </button>
                                    </div>

                                    <label style={{ marginTop: "40px" }}>Select Time Zone:</label>
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
                                            <label htmlFor="Date">Start Date:</label>
                                            <input type='date' name="date" defaultValue="" id="Date" onBlur={handleChange}></input>
                                            {
                                                err.date.length > 0 &&
                                                <span style={{ color: "red", fontSize: "12px" ,display:"block"}}>{err.date}</span>

                                            }
                                        </div>
                                        <div>
                                            <label htmlFor="date-buttons">Start Time:</label>
                                            <input type='time'></input>
                                        </div>
                                    </div>


                                </div>
                                <div className="form-right">
                                    <div className="arrow-relative">
                                        <label htmlFor="Target">Target Email:</label>
                                        <select name="target" id='Target' className='input-select' onBlur={handleChange}>
                                            <option value="" disabled selected hidden>Add target email</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                        {
                                            err.target.length > 0 &&
                                            <span style={{ color: "red", fontSize: "12px" }}>{err.target}</span>

                                        }
                                    </div>

                                    <label htmlFor="Landing">Landing Page:</label>
                                    <div className="arrow-relative">
                                        <select name="landing" id='Landing' className='input-select' onBlur={handleChange}>
                                            <option value="" disabled selected hidden>Select landing page template</option>
                                            <option value="grapefruit">Grapefruit</option>
                                            <option value="lime">Lime</option>
                                            <option value="coconut">Coconut</option>
                                            <option value="mango">Mango</option>
                                        </select>
                                        <div className="icon-container">
                                            <img src={selectArrow} />
                                        </div>
                                        {
                                            err.landing.length > 0 &&
                                            <span style={{ color: "red", fontSize: "12px" }}>{err.landing}</span>

                                        }
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


export default Hoc(Campaign);