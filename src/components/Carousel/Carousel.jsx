/* import { useState } from 'react'; */
import './carousel.css';


function Carousel({ title, pictures }) {

  return (
    <div className='carousel'>
      {pictures.map((picture, index) => (
        <figure key={index}>
        <img src={picture} alt={title}></img>
        <figcaption>{title}</figcaption>
      </figure>
      ))} 
    </div>
  )
}

export default Carousel
