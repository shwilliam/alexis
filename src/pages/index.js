import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
        </header>

        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({node}) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          description {
            childMarkdownRemark {
              html
            }
          }
          bg
          color
        }
      }
    }
    allContentfulPerson(
      filter: {contentful_id: {eq: "15jwOBqpxqSAOy2eOO4S0m"}}
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
        }
      }
    }
  }
`
