import { Link } from 'react-router-dom';
import './card.css';

function Card({ id, title, cover }) {

  return (
    <Link to={`/Accomodation/${id}`} className='card'>
      <figure className='card-figure'>
        <img src={cover} alt={title} className='card-img'></img>
        <figcaption className='card-figcaption'>{title}</figcaption>
      </figure>
    </Link> 
  )
}

export default Card;
