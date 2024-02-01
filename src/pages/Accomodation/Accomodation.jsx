import './accomodation.css';
import { useParams } from 'react-router-dom'; 
import data from '../../assets/logements.json';
import Carousel from '../../components/Carousel/Carousel'
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';

function Accomodation() {
  const { id } = useParams();
  
  const accomodation = data.find(item => item.id === id); // trouve le logement correspondant à l'id 
  
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
      <article>
        <Host 
          name={accomodation.host.name}
          picture={accomodation.host.picture}/>
      </article>
    </main>
  );
}

export default Accomodation;
