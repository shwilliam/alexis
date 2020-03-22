import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Navigation from '../components/navigation'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Hero data={author.node} />
          <Navigation />
        </header>

        <div className="wrapper">
          <h1 className="page-title">Blog</h1>
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

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: {fields: [publishDate], order: DESC}) {
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
        }
      }
    }
  }
`
