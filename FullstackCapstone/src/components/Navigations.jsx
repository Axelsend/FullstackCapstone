import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link className="link" to="/">Album Catalog</Link>
        </li>
        {/* <li>
          <Link className="link" to="/account">Account</Link>
        </li> */}
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar