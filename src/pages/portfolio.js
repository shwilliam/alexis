import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import Helmet from "../components/helmet";
import Layout from "../components/layout";
import Footer from "../components/footer";

class PortfolioIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const { content } = get(this, "props.data.contentfulPage");

    return (
      <Layout location={this.props.location}>
        <Helmet page="Portfolio" />

        <div className="wrapper">
          <h1 className="page-title">Portfolio</h1>

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

export default PortfolioIndex;

export const pageQuery = graphql`
  query portfolioQuery {
    contentfulPage(contentful_id: { eq: "2NaDtPvktzCC0hAvT8k9h7" }) {
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
