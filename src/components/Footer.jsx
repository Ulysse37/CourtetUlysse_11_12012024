import footerLogo from '../assets/footerlogo.svg';
import '../styles/Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <img src={footerLogo} alt='logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer