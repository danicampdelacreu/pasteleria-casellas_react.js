import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='headerGeneral'>
      <button className={`menuButton ${isMenuOpen ? 'hide' : ''}`} onClick={toggleMenu}>
        MENU
      </button>
      {isMenuOpen && (
        <nav className='headerNav'>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/team">EQUIP</Link>
            </li>
            <li>
              <Link to="/repost">REPOSTERIA</Link>
            </li>
            <li>
              <Link to="/pastel">PASTISSERIA</Link>
            </li>
            <li>
              <Link to="/briox">BRIOXERIA</Link>
            </li>
            <li>
              <Link to="/days">ESPECIALS</Link>
            </li>
            <li>
              <Link to="/drinks">CELLER</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}



