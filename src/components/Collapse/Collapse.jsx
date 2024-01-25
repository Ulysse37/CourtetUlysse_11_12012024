import './collapse.css';
import collapseData from '../../assets/about.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
function Collapse() {
  return (
    <section className='wrapper'>
      <div className='accordion'>
        {collapseData.map((item, i) => (
          <div className='item'>
            <div className='collapse-title'>
              <h3>{item.title}</h3>
              <span>
                <FontAwesomeIcon icon={faChevronUp} />
              </span>
            </div>
            <div className='collapse-text'>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collapse;
