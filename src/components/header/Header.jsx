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
        Menú
      </button>
      {isMenuOpen && (
        <nav className='headerNav'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/team">Equip</Link>
            </li>
            <li>
              <Link to="/repost">Reposteria</Link>
            </li>
            <li>
              <Link to="/pastel">Pastisseria</Link>
            </li>
            <li>
              <Link to="/briox">Brioxeria</Link>
            </li>
            <li>
              <Link to="/days">Dias</Link>
            </li>
            <li>
              <Link to="/drinks">Begudes</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}



