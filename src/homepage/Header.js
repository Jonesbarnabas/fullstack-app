import React from 'react'
import {Link} from 'react-router-dom'
import MyImage from './MyImage.jpg';
import Officer from './Officer.jpg';
import './Header.css';

export default function Header() {
  return (

    <body>
      <div class="heading_name"><h1>Welcome to CDC portal</h1></div>
     <div className='container1'>
      <Link className="btn" to="/login"><figure id="first"><img class="oneimg" src={MyImage} alt="Director Image"  width="500px" height="300px" className="director-image"/>
     
     
     <label class="block"><span>Director</span></label>

      </figure></Link>
      <Link className="btn "  to="/login2"><figure id="first">
    <img class="oneimg"src={Officer} alt="officer Image" width="500px" height="300px" className="Officer-image"/>
    
    <label class="block"> <span>Placement Officer</span></label>
    </figure></Link>
    </div>
    </body>
  )
}
