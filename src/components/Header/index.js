import React from 'react';

import logo from '../../images/JDavisSolutionsLogoAlt.png';

const Header = () => (
<div class="fixed">
    <nav class="top-bar" data-topbar role="navigation">
      <ul class="title-area">
        <li class="name">
          <h1><a><img src={logo} alt="JDavis Solutions LLC" /></a></h1>
        </li>
      </ul>
      <section class="top-bar-section">
        <ul class="right">
          <li><a href="#about" class="active nav-button">About Us</a></li>
          <li><a href="#services" class="nav-button">Services</a></li>
          <li><a href="#contact" class="nav-button">Contact</a></li>
        </ul>
      </section>
    </nav>
  </div>
)

export default Header