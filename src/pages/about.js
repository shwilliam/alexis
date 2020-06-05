import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/footer'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <div className="wrapper">
          <h1 className="page-title">About me</h1>

          <div className="split">
            <p
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
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulAuthor(
      filter: {contentful_id: {eq: "3n9x5NFplvt5Hb9QVo6pN1"}}
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
            fixed(width: 320) {
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
`
