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
    const [page] = get(this, 'props.data.allContentfulPage.edges')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
          <Navigation />
        </header>

        <div className="wrapper">
          <div
            dangerouslySetInnerHTML={{
              __html:
                page.node.childContentfulPageContentTextNode.childMarkdownRemark
                  .html,
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
    allContentfulPage(filter: {contentful_id: {eq: "71LU0aM3lP6Hs2JXpGz3PY"}}) {
      edges {
        node {
          title
          childContentfulPageContentTextNode {
            childMarkdownRemark {
              html
            }
          }
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
