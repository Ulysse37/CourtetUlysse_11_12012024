import { useState } from 'react';
import './carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function Carousel({ title, pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide === pictures.length -1 ? 0 : prevSlide + 1));
  };

  return (
    <figure className='carousel-figure'>
    {pictures.length > 1 && (
      <>
        <span className='carousel-span' onClick={previousSlide}><FontAwesomeIcon icon={faChevronLeft} /></span>
        <img src={pictures[currentSlide]} alt={title} className='carousel-img'></img>
        <span className='carousel-span carousel-span-right' onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></span>
        <figcaption className='carousel-figcaption'>{currentSlide + 1} / {pictures.length}</figcaption>
      </>
    )}
    {pictures.length === 1 && (
      <img src={pictures[currentSlide]} alt={title} className='carousel-img'></img>
    )}
  </figure>
  )
}

export default Carousel
