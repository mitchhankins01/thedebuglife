import * as React from "react";
import { navigate } from "@reach/router";
import Layout from "../components/Layout";
import FourOhFour from "../img/social/c404.svg";

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-link">
      <div className="hero-body">
        <div className="container has-text-centered">
          <FourOhFour
            onClick={() => navigate(-1)}
            alt="gorgeous 404 image"
            className="image-404"
          />
          <p className="title">404</p>
          <p className="subtitle">you know what this means...</p>
          <button class="button" onClick={() => navigate(-1)}>
            Click here to pop back
          </button>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
