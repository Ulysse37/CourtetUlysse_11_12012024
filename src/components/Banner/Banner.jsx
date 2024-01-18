import homeBanner from '../../assets/IMG.png';
import './banner.css';

function Banner() {
  return (  
    <div>
      <img class="banner-img" src={homeBanner} alt='Bannière kasa' />
    </div>
  )
}

export default Banner;
