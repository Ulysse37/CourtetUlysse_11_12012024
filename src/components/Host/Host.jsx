import './host.css';

function Host( { name, picture } ) {
  // sépare nom et prénom de l'hôte pour faire saut de ligne entre les 2
  const [firstName, lastName] = name.split(' ');

  return (
    <figure className='host-info-container'>
      <figcaption className='host-name'>{firstName} <br /> {lastName}</figcaption>
      <img className='host-img' src={picture} alt={"photo de " + name}></img>
    </figure>
  )
}

export default Host;
