import React from 'react';
import {Link} from 'react-router-dom'
const Menu = () =>(

<div>

<ul className="nav nav-tabs bg-primary">
  <li className="nav-item">
    <Link className="nav-link active"  to="/">Home</Link>
  </li>
  
  <li className="nav-item">
    <Link className="nav-link "  to="/signin">Signin</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link "  to="/signup">Signup</Link>
  </li>
</ul>
</div>




)
export default Menu;