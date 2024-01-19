import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <img class='navbar-logo' src={logo} alt='logo Kasa' />
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/About">A propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
