import Banner from '../../components/Banner/Banner';
import homeBanner from '../../assets/IMG.png';
import Card from '../../components/Card/Card'
import data from '../../assets/logements.json';
import './home.css';

function Home() {

  return (
    <main>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <figure className='card-container'>
        {data.map((accomodation) => (
          <Card 
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
          /> 
        ))}
      </figure>
    </main>
  );
}

export default Home;
