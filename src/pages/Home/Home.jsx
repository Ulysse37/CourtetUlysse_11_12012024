import Banner from '../../components/Banner/Banner';
import homeBanner from '../../assets/IMG.png';

function Home() {
  return (
    <main>
      <Banner imageSrc={homeBanner} text="Chez vous, partout et ailleurs" />
    </main>
  );
}

export default Home;
