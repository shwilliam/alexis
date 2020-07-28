import {Link} from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/footer'
import Layout from '../components/layout'

class SuccessPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <div className="wrapper">
          <h1 className="page-title">I&apos;ll be in touch shortly~</h1>

          <Link className="home-link" to="/about">
            Back to home
          </Link>
        </div>

        <Footer />
      </Layout>
    )
  }
}

export default SuccessPage
