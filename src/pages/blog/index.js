import * as React from "react";

import Layout from "../../components/Layout";
// import BlogRoll from "../../components/BlogRoll";

const Index = () => {
  return (
    <Layout>
      <div className="columns blog-columns">
        <div className="column">
          <div style={{ height: "50vh", background: "red" }} />
        </div>
        <div className="column">
          <div style={{ height: "50vh", background: "orange" }} />
        </div>
        <div className="column is-12">
          <div className="card">
            {/* <div className="card-image">
              <figure className="image is-2by1">
                <img
                  src="https://bulma.io/images/placeholders/640x320.png"
                  alt="Placeholder image"
                />
              </figure>
            </div> */}
            <header className="card-header">
              <p className="card-header-title">Title of Post</p>
            </header>
            <div className="card-content">
              <div className="content">
                TAGS Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. TAGS
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
  return (
    <Layout>
      <div className="tile is-ancestor blog-tile">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-4 box">
                <p className="title">Hello World1</p>
                <p className="subtitle">What is up?</p>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
              <article className="tile is-child box">
                <p className="title">Hello World2</p>
                <p className="subtitle">What is up?</p>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Hello World3</p>
                <p className="subtitle">What is up?</p>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum
                    ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                    facilisis.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Hello World4</p>
              <p className="subtitle">What is up?</p>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title">Hello World5</p>
            <p className="subtitle">What is up2?</p>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
