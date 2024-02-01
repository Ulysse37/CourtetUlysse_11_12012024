import './host.css';

function Host( { name, picture } ) {

  return (
    <aside>
      <p>{name}</p>
      <img src={picture} alt={"photo de " + name}></img>
    </aside>
  )
}

export default Host;
