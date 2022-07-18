import React from "react";
// import Logo from "../img/logo.svg";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Hero = ({ imageInfo }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <figure className="image">
          {!imageInfo ? (
            <StaticImage
              alt="banner image"
              src="../img/blog-hero.jpeg"
              layout="fullWidth"
              placeholder="dominantColor"
              style={{ height: 700 }}
            />
          ) : (
            <GatsbyImage
              image={imageInfo.image.childImageSharp.gatsbyImageData}
              style={{ height: 700 }}
            />
          )}
        </figure>
        <div className="hero-cutout">
          {/* <Logo className="hero-logo" alt="theDebugLife" /> */}
          <StaticImage alt="logo" className="hero-logo" src="../img/logo.png" />
          <div>
            <span className="is-size-3 is-size-5-mobile">the</span>
            <h1 className="title is-size-2 is-size-5-mobile">Debug Life</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
