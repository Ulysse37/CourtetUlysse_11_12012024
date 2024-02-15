import './tag.css';

function Tag({ tags }) {
  
  return (
    <ul className='tag-list'>
      {tags.map((tag, index) => (
        <li key={index} className='tag-element'>{tag}</li>
      ))}
    </ul>
  );
}

export default Tag;
