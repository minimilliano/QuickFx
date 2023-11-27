import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/DashBoard">Home</NavLink>
          </li>
          <li>
            <Link>Rate</Link>
          </li>
          <li>
            <Link>Wallet</Link>
          </li>
          <li>
            <Link>Profile</Link>
          </li>
          <li>
            <Link>Log Out</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default NavBar;
