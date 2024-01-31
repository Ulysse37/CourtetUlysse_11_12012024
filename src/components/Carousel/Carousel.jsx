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
    <article className='carousel'>
      <figure>
        <span onClick={previousSlide}><FontAwesomeIcon icon={faChevronLeft} /></span>
        <img src={pictures[currentSlide]} alt={title}></img>
        <span onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></span>
        <figcaption>{title}</figcaption>
      </figure>
    </article>
  )
}

export default Carousel
