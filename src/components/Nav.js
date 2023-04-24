import { NavLink } from 'react-router-dom';

const Nav = () => (
  <ul className="d-flex list-unstyled fs-2 p-3 salmon fw-semibold">
    <li className="flex-grow-1">
      <NavLink to="/">Taipei Sounds</NavLink>
    </li>
    <li className="me-3">
      <NavLink to="/about">About</NavLink>
    </li>
    <li className="ms-4">
      <NavLink to="/team">Team</NavLink>
    </li>
  </ul>
);

export default Nav;
