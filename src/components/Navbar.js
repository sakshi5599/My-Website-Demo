import React from "react";
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
return(

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link  to="/images "className="navbar-brand" style={{color:"white",fontSize:"30px"}}>My Image</Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:"white",fontSize:"18px"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact"  className="nav-link"  style={{color:"white",fontSize:"18px",}}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link"  style={{color:"white",fontSize:"18px"}}>About</Link>
        </li><li className="nav-item">
          <Link to="/images" className="nav-link"  style={{color:"white",fontSize:"18px"}}>Images</Link>
        </li>
       
         
        </ul>
    </div>
  </div>
</nav>
)
}
export default Navbar;