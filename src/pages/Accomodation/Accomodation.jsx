import './accomodation.css';
/* import { useState, useEffect } from 'react'; */
import { useParams } from 'react-router-dom'; 
import data from '../../assets/logements.json';
import  Carousel from '../../components/Carousel/Carousel'

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
    </main>
  );
}

export default Accomodation;
