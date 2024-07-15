import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [undergradDropdown, setUndergradDropdown] = useState(false);
  const [postgradDropdown, setPostgradDropdown] = useState(false);

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li
              className="dropdown"
              onMouseEnter={() => setUndergradDropdown(true)}
              onMouseLeave={() => setUndergradDropdown(false)}
            >
              <Link to='/undergraduate'>Undergraduate Courses</Link>
              {undergradDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/undergraduate/btech'>B.Tech</Link>
                  </li>
                  <li>
                    <Link to='/undergraduate/mbbs'>MBBS</Link>
                  </li>
                  <li>
                    <Link to='/undergraduate/bba'>BBA</Link>
                  </li>
                  <li>
                    <Link to='/undergraduate/nursing'>Nursing/Pharmacy</Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className="dropdown"
              onMouseEnter={() => setPostgradDropdown(true)}
              onMouseLeave={() => setPostgradDropdown(false)}
            >
              <Link to='/courses'>Postgraduate Courses</Link>
              {postgradDropdown && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to='/postgraduate/mba'>MBA</Link>
                  </li>
                  <li>
                    <Link to='/postgraduate/mstech'>MS-Technology</Link>
                  </li>
                  <li>
                    <Link to='/postgraduate/msmanagement'>MS-Management</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to='/postgraduate/mstech'>Doctorate</Link>
            </li>
            
          </ul>

          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
