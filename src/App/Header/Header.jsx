
import React from "react";
import './Header.css';



export const Header = () => {
return (
  <nav>
  <div className="nav-wrapper">
    <a href="#" className="brand-logo">BIT BLOG</a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><a href="sass.html">Home</a></li>
      <li><a href="badges.html">Authors</a></li>
      <li><a href="collapsible.html">About</a></li>
    </ul>
  </div>
</nav>
)
};
