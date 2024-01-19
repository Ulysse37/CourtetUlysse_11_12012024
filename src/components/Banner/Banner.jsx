import homeBanner from '../../assets/IMG.png';
import './banner.css';

function Banner() {
  return (  
    <div className="banner-container">
      <img className="banner-img" src={homeBanner} alt='Bannière kasa' />
      <h1 className="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner;
