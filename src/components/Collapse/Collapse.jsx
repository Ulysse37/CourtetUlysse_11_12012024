import './collapse.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function CollapseItem({ title, text }) {
  const [selected, setselected] = useState(false);

  return (
    <article>
      <section className='collapse-title' onClick={() => setselected(!selected)}>
        <h3>{title}</h3>
        <span><FontAwesomeIcon icon={faChevronUp} className={selected ? 'chevronIcon open' : 'chevronIcon'} />
        </span>
      </section>
      <aside className={selected ? "collapse-text show" : "collapse-text"}>
        <p>{text}</p>
      </aside>
    </article>
  )
}

export default CollapseItem;
