import React from "react";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

export const urls = [
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  // { to: "/freecall", label: "Free Call" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [active, setActive] = React.useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = React.useState("");

  React.useEffect(() => {
    const navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }, []);

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
          {urls.map(({ to, label }) => (
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
          {/* <div className="navbar-item has-dropdown is-hoverable navbar-main-link">
            <a className="navbar-link navbar-main-link" href="/#">
              More Options
            </a>

            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div> */}
        </div>

        <div className="navbar-end">
          {/* <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light is-outlined is" href="/#">
                Log in
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
