import { NavLink } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <NavLink className="navbar-brand text-white" to="/">Taipei Sounds</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Player</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/team">Team</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
