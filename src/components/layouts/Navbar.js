import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
  
  const getLinkStyle = ({ isActive }) => (isActive ? 'navSelected' : null );

  return (
    <nav>
       <div className="navItem">
        <NavLink to='/Home' className={getLinkStyle}>Home</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/Matches' className={getLinkStyle} >Matches</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/Profile' className={getLinkStyle} >Profile</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/About' className={getLinkStyle} >About</NavLink>
      </div>
      <div className="navItem">
        <NavLink to='/Contact' className={getLinkStyle} >Contact Us</NavLink>
      </div>

    </nav>
  );
}
export default Navbar;