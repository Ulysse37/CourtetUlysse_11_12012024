import Banner from '../../components/Banner/Banner';
import homeBanner from '../../assets/IMG.png';
import Card from '../../components/Card/Card'
import data from '../../assets/logements.json';

function Home() {
  //console.log(data);
  return (
    <main>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
      <div className='card-container'>
        {data.map((accomodation) => (
          <Card 
            key={accomodation.id}
            id={accomodation.id}
            title={accomodation.title}
            cover={accomodation.cover}
            /* onClick={() => handleCardClick(accomodation.id)} */
           /> 
        ))}
      </div>
    </main>
  );
}

export default Home;
