import './collapse.css';
import { useState } from 'react';
import collapseData from '../../assets/about.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function Collapse() {
  const [selectedItems, setSelectedItems] = useState([]);

  const toggle = (i) => {
    if (selectedItems.includes(i)) {
      setSelectedItems(selectedItems.filter(item => item !== i));
    } else {
      setSelectedItems([...selectedItems, i]);
    }
  }

  return (
    <section className='wrapper'>
      <div className='accordion'>
        {collapseData.map((item, i) => (
          <div className='item'>
            <div className='collapse-title'>
              <h3>{item.title}</h3>
              <span onClick={() => toggle(i)}>
                {selectedItems.includes(i) ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
              </span>
            </div>
            <div className={selectedItems.includes(i) ? 'collapse-text show' : 'collapse-text' }>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collapse;
