import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm"
      style={{ background: '#f0f0f0', marginBottom: '1rem' }}
    >
      <div className="container-fluid">
        <NavLink className=" nav-link" to='/'> My App</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-2">
            <li className="nav-item">
              <NavLink className=" nav-link" to='/'>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" nav-link" to='/userspage'>Users</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
