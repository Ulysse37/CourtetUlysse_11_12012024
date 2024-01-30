import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ id, title, cover, onClick }) {

  return (
    <figure className='card' onClick={onClick}>
      <img src={cover} alt={title}></img>
      <Link to={`/Accomodation/${id}`}>
        <figcaption>{title}</figcaption>
      </Link>
    </figure>
  )
}

export default Card;
