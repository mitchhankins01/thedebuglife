import React from "react";
// import Logo from "../img/logo.svg";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Hero = ({ imageInfo, location }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <figure className="image">
          {location === "blog" && (
            <StaticImage
              alt="banner image"
              src="../img/blog-hero.jpeg"
              layout="fullWidth"
              objectPosition="top center"
              placeholder="dominantColor"
              style={{ height: 900 }}
            />
          )}
          {location === "about" && (
            <StaticImage
              alt="banner image"
              src="../img/community/canoe.jpeg"
              layout="fullWidth"
              objectPosition="top center"
              placeholder="dominantColor"
              style={{ height: 900 }}
            />
          )}
          {imageInfo && (
            <GatsbyImage
              image={imageInfo.image.childImageSharp.gatsbyImageData}
              style={{ height: 900 }}
            />
          )}
        </figure>
        <div className="hero-cutout">
          <StaticImage alt="logo" className="hero-logo" src="../img/logo.png" />
          <div>
            <span className="has-text-primary-light is-size-4 is-size-5-mobile">
              the
            </span>
            <h1 className="has-text-primary title is-size-2 is-size-5-mobile">
              Debug Life
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
