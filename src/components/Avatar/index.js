import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Avatar extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    return (
      <img src={this.state.src} alt={this.state.alt} />
    )
  }

  static propTypes = {
    /** Source to image */
    src: PropTypes.string.isRequired,
    /** Alternative description if no image available */
    alt: PropTypes.string
  }

}

export default Avatar
