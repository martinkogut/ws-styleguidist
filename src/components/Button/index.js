import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from '../../assets/scss/_buttons.scss'

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = { ...props }
  }

  render() {
    const baseClass = s.btn
    const rootClass = classNames(baseClass, {
      [s[`btn-${this.state.context}`]]: this.state.context,
    })
    return <a className={rootClass}>{this.state.text}</a>;
  }
}

export default Button
