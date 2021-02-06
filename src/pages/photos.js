import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "../components/helmet";
import Layout from "../components/layout";
import Footer from "../components/footer";

class PhotosIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const { content } = get(this, "props.data.contentfulPage");

    return (
      <Layout location={this.props.location}>
        <Helmet page="Photos" />

        <div className="wrapper">
          <h1 className="page-title sr-only">Photos</h1>

          <p
            className="no-bullets"
            dangerouslySetInnerHTML={{
              __html: content.childMarkdownRemark.html,
            }}
          />
        </div>

        <Footer />
      </Layout>
    );
  }
}

export default PhotosIndex;

export const pageQuery = graphql`
  query photosQuery {
    contentfulPage(contentful_id: { eq: "77ISdin8whGfcPQGmMVOSZ" }) {
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
