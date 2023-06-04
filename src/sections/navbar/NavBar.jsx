import React, { useState } from "react";
import "./navbar.css";
import data from "./data";
import  Logo from '../../assets/ali-logo.png'

function NavBar() {
  const [activeItem, setActiveItem] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu dropdown
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="container nav_container">
      <a href="index.html" className="nav_logo">
        <img  src= {Logo} alt="Logo"  className="logo-image"/>
      </a>
      <div className="right">

      {/* Menu toggle button */}
      <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? "open" : ""}`} />
        </div>

        <ul className={`nav_menu ${menuOpen ? "open" : ""}`}>
          {data.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className={activeItem === item.link ? "active" : ""}
                onClick={() => setActiveItem(item.link)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
     
      </div>
    </nav>
  );
}

export default NavBar;
