import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutBanner from '../../assets/img-about.jpg';
import collapseData from '../../assets/about.json'
//import '../App.css';

function About() {
  return (
    <main>
      <Banner imageSrc={AboutBanner} imageAlt="Un glacier avec des montagnes" />
      <Collapse data={collapseData} />
    </main>
  );
}

export default About;
