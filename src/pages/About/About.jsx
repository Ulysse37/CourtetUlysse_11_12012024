import Banner from '../../components/Banner/Banner';
import CollapseItem from '../../components/Collapse/Collapse';
import AboutBanner from '../../assets/img-about.jpg';
import collapseData from '../../assets/about.json'
import './about.css';

function About() {
  return (
    <main>
      <Banner imageSrc={AboutBanner} imageAlt="Un glacier avec des montagnes" />
      <article className='wrapper'>
        <div className='accordion'>
          {collapseData.map((item, i) => (
            <CollapseItem key={i} title={item.title} text={item.text} />
          ))}
        </div>
      </article>
    </main>
  );
}

export default About;
