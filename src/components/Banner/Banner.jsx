import homeBanner from '../../assets/IMG.png';
import './banner.css';

function Banner() {
  return (  
    <div className="banner-container">
      <img className="banner-img" src={homeBanner} alt='Bannière kasa' />
      <h2 className="banner-text">Chez vous, partout et ailleurs</h2>
    </div>
  )
}

export default Banner;
