import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from '../../assets/scss/_alerts.scss'

class Alert extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    const baseClass = s.alert
    const rootClass = classNames(baseClass, {
      [s[`alert-${this.state.type}`]]: this.state.type,
      'alert': true // from bootstrap
    })
    return (
      <div className={rootClass} role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
        <strong>{this.state.title}</strong> {this.state.message}
      </div>
    )
  }
}

Alert.PropTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string
}

export default Alert
