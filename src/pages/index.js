import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Footer from '../components/footer'
import ArticlePreview from '../components/article-preview'
import Navigation from '../components/navigation'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <h1 className="sr-only">Home</h1>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
          <Navigation />
        </header>

        <div className="wrapper">
          <ul className="article-list">
            {posts.map(({node}) => (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            ))}
          </ul>

          <p
            dangerouslySetInnerHTML={{
              __html: author.node.shortBio.childMarkdownRemark.html,
            }}
          />

          <Footer />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(
      limit: 2
      sort: {fields: [publishDate], order: DESC}
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          bg
          color
        }
      }
    }
    allContentfulAuthor(
      filter: {contentful_id: {eq: "3n9x5NFplvt5Hb9QVo6pN1"}}
    ) {
      edges {
        node {
          name
          shortBio {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
