import React from "react";
import Logo from "../img/logo.svg";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Hero = ({ imageInfo }) => {
  console.log(1);
  return (
    <section className="hero">
      <div className="hero-body" style={{ padding: "0 0 50px 0" }}>
        <figure className="image">
          {!imageInfo ? (
            <StaticImage
              alt="banner image"
              src="../img/blog-hero.jpeg"
              layout="fullWidth"
              placeholder="dominantColor"
              style={{
                height: "60vh",
                maxHeight: "60vh !important",
                background: "red",
              }}
            />
          ) : (
            <GatsbyImage
              image={imageInfo.image.childImageSharp.gatsbyImageData}
              style={{ height: "100%", maxHeight: "60vh" }}
            />
          )}
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

export default Hero;
