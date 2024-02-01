import './accomodation.css';
import { useParams } from 'react-router-dom'; 
import data from '../../assets/logements.json';
import Carousel from '../../components/Carousel/Carousel'
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Accomodation() {
  const { id } = useParams();
  
  const accomodation = data.find(item => item.id === id); // trouve le logement correspondant à l'id de la page

  return (
    <main>
      <Carousel 
        title={accomodation.title}
        pictures={accomodation.pictures}/> 
      <section className="accomodation-title">
        <h1>{accomodation.title}</h1>
        <p>{accomodation.location}</p>
      </section>
      <aside className="tag-container">
        <ul className='tag-list'>
        {accomodation.tags.map((tag, index) => (
          <Tag key={index} tag={tag}/>
        ))}
        </ul>
      </aside>
      <article className='host-container'>
        <aside className="rating">
          {[...Array(5)].map((_, index) => (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={index < accomodation.rating ? "full-star" : "empty-star"}
            />
          ))}
        </aside>
        <Host 
          name={accomodation.host.name}
          picture={accomodation.host.picture}/>
      </article>
    </main>
  );
}

export default Accomodation;
