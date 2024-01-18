import { Link } from 'react-router-dom'
import './error.css';
function Error() {
  return (
    <body>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </body>
  )
}

export default Error;
