/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import home from "../assets/home.svg";
import create from "../assets/create.svg";
import login from "../assets/login.svg";
import logout from "../assets/logout.svg";
import blognode from "../assets/blognode.svg";
import "./NavBar.css";

export default function NavBar({ isAuth }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="Navbar-content">
        <h2 className="blognode">
          <img className="blognode-img" src={blognode} alt="Logo" />
          Blognode
        </h2>
        {isMenuOpen ? (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            close
          </span>
        ) : (
          <span className="material-symbols-outlined" onClick={toggleMenu}>
            menu
          </span>
        )}
      </div>
      <ul className={`Navbar-list ${isMenuOpen ? "show-menu" : "hide-menu"}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            <img src={home} />
            Home
          </Link>
        </li>
        {isAuth && (
          <li>
            <Link to="/create" onClick={toggleMenu}>
              <img src={create} />
              Create Post
            </Link>
          </li>
        )}
        <li>
          <Link to="/login" onClick={toggleMenu}>
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
