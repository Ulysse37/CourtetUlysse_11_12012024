import logo from '../assets/logo.svg';
import mainImg from '../assets/IMG.png'
import '../styles/NavBar.css';

function NavBar() {
    return (
        <div className='nav-bar'>
            <img src={logo} alt='logo Kasa' />
            <div className='nav-links'>
                <a href='' className='main-link'>Accueil</a>
                <a href=''>A propos</a>
            </div>
            <img src={mainImg} alt='paysage' className='header-img'/>
        </div>
    )
}


export default NavBar