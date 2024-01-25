import './collapse.css';
import { useState } from 'react';
import collapseData from '../../assets/about.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Collapse() {
  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <section className='wrapper'>
      <div className='accordion'>
        {collapseData.map((item, i) => (
          <div className='item'>
            <div className='collapse-title'>
              <h3>{item.title}</h3>
              <span onClick={() => toggle(i)}>
                {selected === i ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
            </div>
            <div className={selected === i ? 'collapse-text show' : 'collapse-text' }>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collapse;
