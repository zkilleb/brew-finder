import './NotFound.css';
import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="PageNotFoundWrapper">
      <div className="NotFoundLine">Page Not Found</div>
      <Link className="NotFoundLine" to="/">
        Click Here to Return Home
      </Link>
    </div>
  );
}
