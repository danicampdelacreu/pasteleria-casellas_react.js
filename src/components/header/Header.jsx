import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './Header.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const timeoutId = setTimeout(() => {
        setIsMenuOpen(false);
      }, 4000);

      return () => clearTimeout(timeoutId);
    }
  }, [isMenuOpen]);

  return (
    <div className='headerGeneral'>
      <button className='menuButton' onClick={toggleMenu}>
        Menú
      </button>
      <nav className={`headerNav ${isMenuOpen ? 'open' : ''}`}>
        {isMenuOpen && (
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
        )}
      </nav>
    </div>
  );
}

