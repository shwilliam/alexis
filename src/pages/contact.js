import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

class ContactIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')
    const [page] = get(this, 'props.data.allContentfulPage.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
          <Navigation />
        </header>

        <div className="wrapper">
          <h1 className="page-title">{page.node.title}</h1>

          <p
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

export default ContactIndex

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPage(filter: {contentful_id: {eq: "7FWIWziIvNi4B9NC3d9a8m"}}) {
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
