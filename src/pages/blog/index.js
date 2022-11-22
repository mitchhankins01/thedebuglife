import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Facebook from "../../img/social/facebook.svg";
import GitHub from "../../img/social/github.svg";
import Instagram from "../../img/social/instagram.svg";
import LinkedIn from "../../img/social/linkedin.svg";
import TikTok from "../../img/social/tiktok.svg";
import Twitter from "../../img/social/twitter.svg";
import YouTube from "../../img/social/youtube.svg";
import BlogRoll from "../../components/BlogRoll";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";

const Index = ({ data }) => {
  return (
    <Layout>
      <Hero location="blog" />
      <div className="columns blog-columns">
        <div className="column">
          <BlogRoll />
        </div>
        <div className="column subscribe-column">
          <div className="card subscribe-card">
            <div className="card-content subscribe-card-content">
              <Newsletter />
            </div>
            <header className="card-header">
              <p className="card-header-title is-size-6">
                Connect with Mitch on Social Media
              </p>
            </header>
            <div className="card-content subscribe-card-social">
              <div className="content is-flex is-justify-content-space-between">
                <a
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/thedebuglife"
                >
                  <Facebook alt="facebook" />
                </a>
                <a
                  aria-label="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/mitchhankins01"
                >
                  <GitHub alt="github" />
                </a>
                <a
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/thedebuglife"
                >
                  <Instagram alt="instagram" />
                </a>
              </div>
              <div className="content is-flex is-justify-content-space-between">
                <a
                  target="_blank"
                  aria-label="linkedin"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/thedebuglife"
                >
                  <LinkedIn alt="linkedin" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="tiktok"
                  href="https://www.tiktok.com/@thedebuglife"
                >
                  <TikTok alt="tiktok" />
                </a>
                <a
                  target="_blank"
                  aria-label="twitter"
                  rel="noopener noreferrer"
                  href="https://www.twitter.com/thedebuglife"
                >
                  <Twitter alt="twitter" />
                </a>
                <a
                  target="_blank"
                  aria-label="youtube"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCcnj9gzdYe2a_sxLY3clmag"
                >
                  <YouTube alt="youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query BlogPageQuery {
    imageSharp(original: { src: { regex: "/blog-hero/" } }) {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH, placeholder: BLURRED)
    }
  }
`;
