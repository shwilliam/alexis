import React from 'react'
import {graphql} from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulAuthor.edges')

    return (
      <Layout location={this.props.location}>
        <h1 className="sr-only">Home</h1>
        <Helmet title={siteTitle} />

        <div className="home-container">
          <header>
            <Navigation />
          </header>

          <div className="wrapper">
            <h2 className="home-title">{author.node.name}</h2>

            <p className="home-subtitle">
              Hi, I'm Alexis, a recent McGill graduate with experience and
              interest in the fields of environmental sustainability and social
              impact. These are some beautiful wildflowers I saw while on a hike
              in Manning Park, BC. Welcome to my site!
            </p>
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
