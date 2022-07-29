import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Hero = ({ imageInfo, location }) => {
  return (
    <section className="hero">
      <div className="hero-body">
        <figure className="image hero-image">
          {location === "blog" && (
            <StaticImage
              alt="banner image"
              src="../img/blog-hero.jpeg"
              layout="fullWidth"
              objectPosition="top center"
              placeholder="dominantColor"
            />
          )}
          {location === "about" && (
            <StaticImage
              alt="banner image"
              src="../img/community/canoe.jpeg"
              layout="fullWidth"
              objectPosition="top center"
              placeholder="dominantColor"
            />
          )}
          {imageInfo && (
            <GatsbyImage
              image={imageInfo.image.childImageSharp.gatsbyImageData}
            />
          )}
        </figure>
        <div className="hero-cutout">
          <StaticImage
            alt="logo"
            className="hero-logo"
            src="../img/logo.png"
            objectFit="contain"
          />
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
