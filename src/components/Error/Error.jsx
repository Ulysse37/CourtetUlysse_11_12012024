import { Link } from 'react-router-dom'
import './error.css';
function Error() {
  return (
    <body>
      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retournez sur la page d'accueil</Link>
    </body>
  )
}

export default Error;
