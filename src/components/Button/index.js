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
      [s[`btn-small`]]: this.state.small,
      [s[`btn-large`]]: this.state.large,
    })
    return <a className={rootClass}>{this.state.text}</a>;
  }

  static propTypes = {
    /** Use to set smaller button size */
    small: PropTypes.bool,
    /** Use to set bigger button size */
    large: PropTypes.bool,
    /** Add text to button */
    text: PropTypes.string.isRequired,
    /** Style the button with props: ~ghost~ */
    context: PropTypes.string.isRequired
  }

}

export default Button
