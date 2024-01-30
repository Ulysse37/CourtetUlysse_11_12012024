import { Link } from 'react-router-dom';
import './card.css';

function Card({ id, title, cover }) {

  return (
    <Link to={`/Accomodation/${id}`} className='card'>
      <figure>
        <img src={cover} alt={title}></img>
          <figcaption>{title}</figcaption>
      </figure>
      </Link> 
    )
  }

export default Card;
