import { useState } from 'react';
import './carousel.css';

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
        <button onClick={previousSlide}>Previous</button>
        <img src={pictures[currentSlide]} alt={title}></img>
        <button onClick={nextSlide}>Next</button>
        <figcaption>{title}</figcaption>
      </figure>
    </article>
  )
}

export default Carousel
