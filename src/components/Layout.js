import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix, graphql } from "gatsby";
import Logo from "../img/logo.svg";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-body" style={{ padding: "0 0 50px 0" }}>
        <figure className="image">
          <StaticImage
            alt="banner image"
            src="../img/blog-hero.jpeg"
            layout="fullWidth"
            placeholder="dominantColor"
            style={{ height: "100%", maxHeight: "60vh" }}
          />
        </figure>
        <div className="hero-cutout">
          <Logo className="hero-logo" alt="theDebugLife" />
          <div>
            <span className="is-size-3 is-size-5-mobile">the</span>
            <h1 className="title is-size-2 is-size-5-mobile">Debug Life</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <Hero />
      <div className="layout-children">{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
