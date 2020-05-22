import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/footer'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')
    const {content, image} = get(this, 'props.data.contentfulPage')

    return (
      <Layout location={this.props.location}>
        <h1 className="sr-only">Home</h1>
        <Helmet title={siteTitle} />

        <div className="home-container">
          <div className="wrapper">
            <h2 className="home-title">{author.node.name}</h2>

            <p
              className="home-subtitle"
              dangerouslySetInnerHTML={{
                __html: content.childMarkdownRemark.html,
              }}
            />

            <div className="home-img">
              <Img fixed={image.fixed} />
            </div>
          </div>

          <Footer />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(contentful_id: {eq: "1sA3TZSZKiNpPwzJb27xiA"}) {
      content {
        childMarkdownRemark {
          html
        }
      }
      image {
        fixed(width: 400) {
          width
          height
          src
          srcSet
        }
      }
    }
    allContentfulAuthor(
      filter: {contentful_id: {eq: "3n9x5NFplvt5Hb9QVo6pN1"}}
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`
