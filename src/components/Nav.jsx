import { Link } from "react-router-dom";
import logo from "../images/alaska.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
const Nav = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="logo" />
            <h3>Learn with Nature</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Nav;
