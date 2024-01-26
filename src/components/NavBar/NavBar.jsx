import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './navbar.css';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav>
      <img className='navbar-logo' src={logo} alt='logo Kasa' />
      <ul>
        <li>
          <Link to="/" className={`${pathname === "/" ? "active" : ""} accueil-link`}>Accueil</Link>
        </li>
        <li>
          <Link to="/About" className={pathname === "/About" ? "active" : ""}>A propos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
