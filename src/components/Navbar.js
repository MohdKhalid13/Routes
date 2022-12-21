import React from "react";
import {NavLink} from "react-router-dom"


function Navbar(props) {


    return (
<>



<ul>
  <li><NavLink class="active" to="/Home">Home</NavLink></li>
  {/* <li><NavLink to="">News</NavLink></li> */}
  <li><NavLink to="/">Contact</NavLink></li>
  {/* <li><NavLink to="">About</NavLink></li> */}
</ul>
</>

    );
  }

export default Navbar;
