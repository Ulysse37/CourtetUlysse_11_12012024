import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import AboutBanner from '../../assets/img-about.jpg';
import collapseData from '../../assets/about.json'
import './about.css';

function About() {
  return (
    <main>
      <Banner imageSrc={AboutBanner} imageAlt="Un glacier avec des montagnes" />
      <div className='wrapper'>
        {collapseData.map((item, i) => (
          <Collapse key={i} title={item.title} text={item.text} />
        ))}  
      </div>
    </main>
  );
}

export default About;
