import './accomodation.css';
/* import { useState, useEffect } from 'react'; */
import { useParams } from 'react-router-dom'; 
import data from '../../assets/logements.json';
import  Carousel from '../../components/Carousel/Carousel'

function Accomodation() {
  let { id } = useParams();
  
  const accomodation = data.find(item => item.id ===id);
  return (
    <main>
      <Carousel 
          title={accomodation.title}
          pictures={accomodation.pictures}/> 
    </main>
  );
}

export default Accomodation;
