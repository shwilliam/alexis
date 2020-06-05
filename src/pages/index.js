import React from 'react'
import {graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const {image} = get(this, 'props.data.contentfulPage')

    return (
      <div className="home">
        <h1 className="sr-only">Home</h1>
        <Helmet title={siteTitle} />
        <div className="home-img">
          <Link to="/about">
            <Img fixed={image.fixed} />
          </Link>
        </div>
        <Link className="home-link" to="/about">
          Enter site
        </Link>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    contentfulPage(contentful_id: {eq: "1sA3TZSZKiNpPwzJb27xiA"}) {
      image {
        fixed(width: 400) {
          width
          height
          src
          srcSet
        }
      }
    }
  }
`
