import * as React from "react";
import { Link } from "gatsby";
import { urls } from "./Navbar";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="container">
          <div className="columns">
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  {urls.map((url, i) => (
                    <li key={i}>
                      <Link to={url.to} className="navbar-item">
                        {url.label}
                      </Link>
                    </li>
                  ))}
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
