import React from 'react';

function MenuItem({ title }) {
  return (
    <li className="nav-item">
      <a className={`nav-link menu-title ${title === "Home" ? "HomeActive" : ""}`} href="#">
        {title}
      </a>
    </li>
  );
}

export default MenuItem;
