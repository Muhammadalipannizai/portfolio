import React, { useState } from "react";
import "./navbar.css";
import data from "./data";

function NavBar() {
  const [activeItem, setActiveItem] = useState("#");

  return (
    <nav>
      <div className="container nav_container">
      <div className="left"> <h3> Ali</h3>
      </div>
      <div className="right">
        <ul className="nav_menu">
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
