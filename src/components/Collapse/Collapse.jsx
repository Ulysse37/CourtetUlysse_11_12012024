import './collapse.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function Collapse({ title, text, className }) {
  const [selected, setselected] = useState(false);

  let content = null;
// Vérifie si le texte est un tableau ou une chaine de string, et le renvoit différement en fonction
  if (Array.isArray(text)) { 
    content = text.map((item, index) => (
      <p key={index}>{item}</p>
    ));
  } else {
    content = <p>{text}</p>;
  }

  return (
    <section className={className}>
      <header className='collapse-title'>
        <h3>{title}</h3>
        <span onClick={() => setselected(!selected)}><FontAwesomeIcon icon={faChevronUp} className={selected ? 'chevronIcon open' : 'chevronIcon'} />
        </span>
      </header>
      <aside className={selected ? "collapse-text show" : "collapse-text"}>
        {content}
      </aside>
    </section>
  )
}

export default Collapse;
