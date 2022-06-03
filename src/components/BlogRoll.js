import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const BlogRollTemplate = ({ data, countdown }) => {
  const { edges: posts } = data.allMarkdownRemark;

  return (
    <div className="columns is-multiline">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="is-parent column is-6" key={post.id}>
            <Link to={post.fields.slug}>
              <div className="card blog-card">
                <div className="card-image">
                  {post.frontmatter.featuredimage && (
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  )}
                </div>
                <header
                  className="card-header"
                  style={{
                    height: 80,
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <p className="card-header-title is-size-5">
                    {post.frontmatter.title}
                  </p>
                </header>
                <div className="card-content">
                  <div
                    className="content"
                    style={{
                      height: 200,
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    {post.excerpt}
                  </div>
                </div>
                <div className="blog-read-more-link">
                  <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  <button className="button is-outlined">Keep Reading →</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        quality: 50
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                      )
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
