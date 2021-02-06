import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import get from "lodash/get";
import Helmet from "../components/helmet";
import Layout from "../components/layout";
import Footer from "../components/footer";

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const [author] = get(this, "props.data.allContentfulAuthor.edges");

    return (
      <Layout location={this.props.location}>
        <Helmet page="About" />
        <div className="wrapper">
          <h1 className="page-title">Hello~</h1>

          <div className="split">
            <div
              dangerouslySetInnerHTML={{
                __html: author.node.bio.childMarkdownRemark.html,
              }}
            />

            <div className="page-hero-img">
              <Img fixed={author.node.image.fixed} />
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    );
  }
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAuthor(
      filter: { contentful_id: { eq: "3n9x5NFplvt5Hb9QVo6pN1" } }
    ) {
      edges {
        node {
          name
          bio {
            childMarkdownRemark {
              html
            }
          }
          image {
            fixed(width: 320, quality: 100) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
