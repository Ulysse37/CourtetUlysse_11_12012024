import homeBanner from '../../assets/IMG.png';
import './banner.css';

function Banner() {
  return (  
    <div class="banner-container">
      <img class="banner-img" src={homeBanner} alt='Bannière kasa' />
      <h1 class="banner-text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner;
