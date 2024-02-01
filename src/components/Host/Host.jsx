import './host.css';

function Host( { name, picture } ) {
  // sépare nom et prénom de l'hôte pour faire saut de ligne entre les 2
  const [firstName, lastName] = name.split(' ');

  return (
    <aside className='host-info-container'>
      <p className='host-name'>{firstName} <br /> {lastName}</p>
      <img className='host-img' src={picture} alt={"photo de " + name}></img>
    </aside>
  )
}

export default Host;
