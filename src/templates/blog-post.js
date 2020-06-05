import React from 'react'
import {graphql, Link} from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={`${post.title} | ${siteTitle}`} />

        <header>
          <Navigation />
        </header>

        <div className="wrapper">
          <Link to="/blog" className="section-subheading"><span className="back" role="img" aria-label="">☜</span> Back to blog</Link>
          <h1 className="section-headline">{post.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          >
            {post.publishDate}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content.childMarkdownRemark.html,
            }}
          />
        </div>

        <Footer />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
