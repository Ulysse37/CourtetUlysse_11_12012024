import './banner.css';

function Banner({ imageSrc, text }) {
  return (
    <div className="banner-container">
      <img className="banner-img" src={imageSrc} alt='Bannière kasa' />
      <h2 className="banner-text">{text}</h2>
    </div>
  )
}

export default Banner;
