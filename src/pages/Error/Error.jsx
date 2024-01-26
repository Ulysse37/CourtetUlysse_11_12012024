import { Link } from 'react-router-dom'
import './error.css';
//import '../App.css';

function Error() {
  return (
    <main className='error-main'>
      <h1 className="error-title">404</h1>
      <h2 className="error-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className='error-link'>Retournez sur la page d'accueil</Link>
    </main>
  );
}

export default Error;
