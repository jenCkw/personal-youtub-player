import React from "react";
import { MdMenu, MdSearch, MdNotifications } from "react-icons/md";
import "./style.css";

export default function Navbar() {
  return (
    <div>
      <div className="navbar-container">
        
          <ul className="navbar-icon-logo">
            <li>
              <MdMenu className="navbar-icon"/>
            </li>
            <li>
              <h1 className="navbar-logo">YouPlayer</h1>
            </li>
          </ul>
        
        <ul>
          <li>
            <MdSearch />
          </li>
          <li>
            <MdNotifications />
          </li>
          <li>sign up</li>
        </ul>
      </div>
    </div>
  );
}
