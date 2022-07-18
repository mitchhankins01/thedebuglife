import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = () => {
  const { pathname } = useLocation();
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
        <div className="navbar-logo-container">
          <StaticImage alt="logo" src="../img/logo_light.png" />
        </div>

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
          {[
            { to: "/blog", label: "Blog" },
            { to: "/about", label: "About" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              className={`navbar-item navbar-main-link ${
                pathname.replace(/\//g, "") === to.replace(/\//g, "")
                  ? "is-active"
                  : ""
              }`}
              to={to}
            >
              {label}
            </Link>
          ))}
          <div className="navbar-item has-dropdown is-hoverable navbar-main-link">
            <a className="navbar-link navbar-main-link" href="/#">
              More Options
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
              <a className="button is-light is-outlined" href="/#">
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
