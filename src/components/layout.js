import React from 'react'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const {children} = this.props

    return (
      <Container>
        <header>
          <Navigation />
        </header>

        {children}
      </Container>
    )
  }
}

export default Template
