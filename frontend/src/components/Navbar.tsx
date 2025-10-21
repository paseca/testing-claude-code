import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <h1>Gym Routines</h1>
        </div>
        <div className="navbar-links">
          <Link
            to="/routines"
            className={`nav-link ${location.pathname === '/routines' || location.pathname === '/' ? 'active' : ''}`}
          >
            Routines
          </Link>
          <Link
            to="/calendar"
            className={`nav-link ${location.pathname === '/calendar' ? 'active' : ''}`}
          >
            Calendar
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
