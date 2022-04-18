import React from "react";
import Github from '../../img/github.png';
/*import Linkedin from '../../img/linkedin.png';*/
import Instagram from '../../img/instagram.png'

import './Intro.css';
const Intro = () =>{
    return(
<div className="Intro">
    <div className="i-left">
        <div className="i-name">

          <span>Hello! I Am </span>
          <span>Nabina Shrestha</span>
          <span> A basic button component that should render nicely on any platform. Supports a minimal level of customization.</span>
         </div>

         <button className=" button i-button">Hire Me</button>
         <div className="i-icon">
             <a href="https://github.com/">
             <img src={Github} alt="" />
             </a>
             <a href="https://github.com/">
        <img src={require('../../img/linkedin.png')} alt="" />
        </a>
             <a href="https://www.instagram.com/">
             <img src={Instagram} alt=""/>
             </a>
         </div>

         </div>

    <div className="i-right">
        {/* todo:square photo add*/}
        Square Photo
    </div>

</div>

    )
}
export default Intro