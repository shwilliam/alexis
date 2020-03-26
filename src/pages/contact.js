import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

class ContactIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />

        <header>
          <Navigation />
        </header>

        <div className="wrapper">
          <h1 className="page-title">Let's get in touch</h1>

          <form id="contact-form" className="contact-form">
            <label className="contact-form__name">
              <p className="contact-form__label">Name</p>
              <input type="text" name="name" required />
            </label>

            <label className="contact-form__email">
              <p className="contact-form__label">E-mail</p>
              <input type="email" name="email" required />
            </label>

            <label className="contact-form__message">
              <p className="contact-form__label">Message</p>
              <textarea name="message" rows={10} required />
            </label>

            <button type="submit">Send</button>
          </form>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default ContactIndex
