import * as React from "react";
import { Link } from "gatsby";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
              {/* <Newsletter isWide={true} /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
