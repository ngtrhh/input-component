import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <span>Dev</span>challenges.io
      </div>
      <div className="sidebar__menu">
        <ul>
          <li>
            <a href="/color">Color</a>
          </li>
          <li>
            <a href="/typography">Typography</a>
          </li>
          <li>
            <a href="/spaces">Spaces</a>
          </li>
          <li>
            <a href="/buttons">Buttons</a>
          </li>
          <li>
            <a href="/inputs" className="active">
              Inputs
            </a>
          </li>
          <li>
            <a href="/grid">Grid</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
