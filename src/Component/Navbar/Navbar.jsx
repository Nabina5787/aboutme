
import React from "react";
import './Navbar.css'
const Navbar = () => {
    return(
        <div className="n-wapper"> 
        <div className="n-left">
            <div className="n-name">Nabina</div>
            <span>toggle</span>
</div>
            

    
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}> 
                <li> Home</li>
                    <li> Services</li>
                    <li> Experience</li>
                    <li> Portfolio</li>

                </ul>



            </div>
            <button className="button">
                Contact Us
            </button>
        </div>
        </div>
        
        )
        }
        export default Navbar
    


