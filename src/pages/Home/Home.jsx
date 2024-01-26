import Banner from '../../components/Banner/Banner';
import homeBanner from '../../assets/IMG.png';
import data from '../../assets/logements.json';

function Home() {
  console.log(data);
  return (
    <main>
      <Banner imageSrc={homeBanner} imageAlt="Falaise au dessus de l'océan" text="Chez vous, partout et ailleurs" />
    </main>
  );
}

export default Home;
