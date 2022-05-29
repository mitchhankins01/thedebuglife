import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = () => {
  const [active, setActive] = React.useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = React.useState("");

  function toggleHamburger() {
    setActive(!active);
    setNavBarActiveClass(active ? "is-active" : "");
  }

  return (
    <nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          <img src={logo} alt="theDebugLife" style={{ width: 88 }} />
        </Link>

        <div
          className={`navbar-burger burger ${navBarActiveClass}`}
          data-target="navMenu"
          role="menuitem"
          tabIndex={0}
          onKeyPress={toggleHamburger}
          onClick={toggleHamburger}
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
        <div className="navbar-start ">
          <Link className="navbar-item" to="/blog">
            Blog
          </Link>
          <Link className="navbar-item" to="/about">
            About
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/#">
              More
            </a>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className="button is-primary">Sign Up</button>
              <a className="button is-light" href="/#">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
