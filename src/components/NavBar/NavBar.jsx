import logo from '../../assets/logo.svg';
import './navbar.css';

function NavBar() {
  return (
    <nav>
      <img src={logo} alt='logo Kasa' />
      <ul>
        <li>
          <a href='#'>Accueil</a>
        </li>
        <li>
          <a href='#'>A propos</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;
