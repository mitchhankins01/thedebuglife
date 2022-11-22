import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { Disqus } from "gatsby-plugin-disqus";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";

const getSchemaOrgJSONLD = ({ url, title, image, description, date }) => {
  return [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: "the Debug Life",
    },
    {
      "@context": "https://thedebuglife.com",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": url,
            name: title,
            image,
          },
        },
      ],
    },
    {
      "@context": "https://thedebuglife.com",
      "@type": "BlogPosting",
      url,
      name: title,
      alternateName: "the Debug Life",
      headline: title,
      image: {
        "@type": "ImageObject",
        url: image,
      },
      description,
      author: {
        "@type": "Person",
        name: "Mitch Hankins",
      },
      publisher: {
        "@type": "Organization",
        url: "https://thedebuglife.com",
        logo: "https://thedebuglife.com/img/logo.png",
        name: "Mitch Hankins",
      },
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://thedebuglife.com",
      },
      date,
    },
  ];
};

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    url: `https://thedebuglife.com${post.fields.slug}`,
    title: post.frontmatter.title,
    image: post.frontmatter.featuredimage,
    description: post.frontmatter.description,
    date: post.frontmatter.date,
  });

  return (
    <Layout>
      <Hero imageInfo={{ image: post.frontmatter.featuredimage }} />
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet
            title={post.frontmatter.title}
            titleTemplate="%s | Blog"
            link={[
              {
                rel: "canonical",
                href: `https://thedebuglife.com${post.fields.slug}`,
              },
            ]}
          >
            <title>{`${post.frontmatter.title}`}</title>
            {/* <meta name="image" content={post.frontmatter.featuredimage} /> */}
            <script type="application/ld+json">
              {JSON.stringify(schemaOrgJSONLD)}
            </script>
            <meta property="og:type" content="article" />
            <meta property="og:title" content={post.frontmatter.title} />
            <meta
              property="og:description"
              content={post.frontmatter.description}
            />
            {/* <meta
              property="og:image"
              content={post.frontmatter.featuredimage}
            /> */}
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Newsletter isWide={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
                Comments
              </h1>
              <Disqus config={{ identifier: post.id, title: post.title }} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              layout: FULL_WIDTH
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
