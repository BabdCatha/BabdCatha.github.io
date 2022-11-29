import React from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/routes';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation = () => (
  <header id="header">
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{window.i18n(l.label)}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="dropdown">
      <li className="language">Language</li>
      <div className="dropdown-content">
        <button type="button" onClick={() => window.changeLanguage('en')}>English</button>
        <button type="button" onClick={() => window.changeLanguage('fr')}>Français</button>
        <button type="button" onClick={() => window.changeLanguage('zh')}>中文</button>
      </div>
    </div>

    <Hamburger />

  </header>
);

export default Navigation;
