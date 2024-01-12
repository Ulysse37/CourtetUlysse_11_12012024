import footerLogo from '../../assets/footerlogo.png';
import './footer.css';

function Footer() {
  return (
    <footer>
      <img src={footerLogo} alt='logo Kasa' />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer;
