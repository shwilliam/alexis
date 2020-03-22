import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
          <Navigation />
        </header>

        <div className="wrapper">
          <h1 className="page-title">About me</h1>

          <p
            dangerouslySetInnerHTML={{
              __html: author.node.bio.childMarkdownRemark.html,
            }}
          />
        </div>
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
        }
      }
    }
  }
`
