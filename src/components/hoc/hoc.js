import React, { useState } from 'react';

import { Navbar } from '../navbar/navbar';
import './hoc.css'


function Hoc(OriginalComponent) {
    function UpdatedComponent(props) {
        const [navValue,setNav] = useState("0");
        const showNav = () => {
            if(navValue=="0"){
                const node = document.getElementById('slide');
                node.style.left="0";
                setNav("1")
            }
            else{
                const node = document.getElementById('slide');
                node.style.left="-300px";
                setNav("0");
            }
        }
        return (
            <div style={{ display: "flex", width: "100%" }}>
                <div id="slide" className='slider'>
                    <Navbar func={showNav}/>
                </div>
                <OriginalComponent func={showNav}/>
                {/* <button onClick={showNav}>Icon</button> */}
            </div>)
    }
    return UpdatedComponent;

}
export default Hoc;




