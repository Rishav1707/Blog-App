/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import home from "../assets/home.svg";
import create from "../assets/create.svg";
import login from "../assets/login.svg";
import logout from "../assets/logout.svg";
import "./NavBar.css";

export default function NavBar({ isAuth }) {
  return (
    <nav>
      <ul className="Navbar-list">
        <li>
          <Link to="/">
            <img src={home} />
            Home
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to="/create">
              <img src={create} />
              Create Post
            </Link>
          </li>
        )}
        <li>
          <Link to="/login">
            {isAuth ? (
              <>
                <img src={logout} alt="Logout" />
                Logout
              </>
            ) : (
              <>
                <img src={login} alt="Login" />
                Login
              </>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
