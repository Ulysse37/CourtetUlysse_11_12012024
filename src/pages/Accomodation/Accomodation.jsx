import './accomodation.css';
import { useParams } from 'react-router-dom'; 
import data from '../../assets/logements.json';
import Carousel from '../../components/Carousel/Carousel'
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Collapse from '../../components/Collapse/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Error from '../Error/Error';

function Accomodation() {
  const { id } = useParams();
  
  const accomodation = data.find(item => item.id === id); // trouve le logement correspondant à l'id de la page

  if (!accomodation) {
    return < Error />
  }

  return (
    <main>
      <Carousel 
        title={accomodation.title}
        pictures={accomodation.pictures}/>
      <article className='information-container'>
        <header className="accomodation-title">
          <h1>{accomodation.title}</h1>
          <p>{accomodation.location}</p>
        </header>
        <ul className='tag-list'>
          {accomodation.tags.map((tag, index) => (
            <Tag key={index} tag={tag}/>
          ))}
        </ul>
        <div className='host-container'>
          <figure className="rating">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < accomodation.rating ? "full-star" : "empty-star"}
                /* si index de l'icône < note du logement affiche icône pleine sinon l'affiche en grise */
              />
            ))}
          </figure>
          <Host 
            name={accomodation.host.name}
            picture={accomodation.host.picture}/>
        </div>
      </article>
      <aside className='accomodation-collapse-container'>
          <Collapse 
            title="Description"
            text={accomodation.description}
            className="accomodation-descr"/>
          <Collapse 
            title="Équipement"
            text={accomodation.equipments}
            className="accomodation-equip"/>
      </aside>
    </main>
  );
}

export default Accomodation;
