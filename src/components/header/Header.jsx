import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <p>logo caselles</p>
            <nav>
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
        </header>
    );
};