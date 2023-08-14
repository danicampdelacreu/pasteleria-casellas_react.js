import { Link } from 'react-router-dom';

import './Header.css'

import logo from '../../assets/img/logoprueba.jpeg';

export default function Header(){
    return(
        <div className='headerGeneral'>
            <div className='headerLogo'>
                <img class='logo' src= { logo } />
            </div>
            <nav className='headerNav'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/team">Qui som</Link>
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
        </div>
    );
};