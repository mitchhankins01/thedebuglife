import * as React from "react";

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
import { graphql } from "gatsby";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const Index = ({ data }) => {
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");
  const [formState, setFormState] = React.useState({ isValidated: false });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;

    fetch("/.netlify/functions/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formState,
      }),
    })
      .then((data) => {
        setLoading(false);
        if (data.status === 400) {
          setResponse("You are already subscribed.");
          alert("You are already subscribed.");
        } else {
          setResponse("Please check your email to confirm your subscription!");
          alert("Please check your email to confirm your subscription!");
        }
      })
      .catch(() => {
        setLoading(false);
        setResponse("Error, something went wrong.");
        alert("Error, something went wrong.");
      });
  };

  return (
    <Layout>
      <Hero location="blog" />
      <div className="columns blog-columns">
        <div className="column">
          <BlogRoll />
        </div>
        <div className="column subscribe-column">
          <div className="card subscribe-card">
            <header className="card-header">
              <p className="card-header-title is-size-5">
                Follow Mitch on Social
              </p>
            </header>
            <div className="card-content blog-card-content">
              <div className="content is-flex is-justify-content-space-between">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/thedebuglife"
                >
                  <Facebook alt="facebook" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/mitchhankins01"
                >
                  <GitHub alt="github" />
                </a>
                <a
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
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/thedebuglife"
                >
                  <LinkedIn alt="linkedin" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@thedebuglife"
                >
                  <TikTok alt="tiktok" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.twitter.com/thedebuglife"
                >
                  <Twitter alt="twitter" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/channel/UCcnj9gzdYe2a_sxLY3clmag"
                >
                  <YouTube alt="youtube" />
                </a>
              </div>
            </div>
            <header className="card-header">
              <p className="card-header-title is-size-5">
                Subscribe to Newsletter
              </p>
            </header>
            <div className="card-content blog-card-content">
              <div className="content">
                {response ? (
                  response
                ) : (
                  <form
                    name="email"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="email" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"name"}>
                        Name:
                      </label>
                      <div className="control">
                        <input
                          disabled={loading}
                          className="input"
                          type={"text"}
                          name={"name"}
                          onChange={handleChange}
                          id={"name"}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={"email"}>
                        Email:
                      </label>
                      <div className="control">
                        <input
                          disabled={loading}
                          className="input"
                          type={"email"}
                          name={"email"}
                          onChange={handleChange}
                          id={"email"}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button
                        disabled={loading}
                        className="button email-button"
                        type="submit"
                      >
                        {loading ? "Subscribing" : "Sign Up"}
                      </button>
                    </div>
                  </form>
                )}
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
